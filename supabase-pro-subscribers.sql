-- Run this in Supabase -> SQL Editor
-- Backs the extension's email-based Pro entitlement check.
-- Writes only ever happen server-side (Vercel webhook) using the service
-- role key, which bypasses RLS entirely -- the policies below only need to
-- cover what the signed-in extension user is allowed to read.

create table if not exists subscribers (
  email text primary key,
  is_pro boolean not null default false,
  polar_customer_id text,
  plan text, -- 'lifetime' | 'monthly'
  updated_at timestamptz not null default now()
);

alter table subscribers enable row level security;

-- The signed-in user (via Supabase Auth JWT) may read only their own row.
-- No insert/update/delete policy exists for anon/authenticated roles, so
-- those operations are denied by default for the client. The webhook uses
-- the service role key, which bypasses RLS, so it can still upsert freely.
--
-- Compares case-insensitively: auth.email() is normalized to lowercase by
-- Supabase Auth, but `email` here came from a Polar checkout payload that
-- may preserve whatever case the customer typed (e.g. "User@x.com"). A
-- case-sensitive comparison silently denied paid users their own row.
drop policy if exists "Users can read own subscriber row" on subscribers;
create policy "Users can read own subscriber row"
  on subscribers
  for select
  to authenticated
  using (lower(auth.email()) = lower(email));

-- Keep updated_at current on every webhook upsert.
create or replace function set_subscribers_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists subscribers_set_updated_at on subscribers;
create trigger subscribers_set_updated_at
  before update on subscribers
  for each row
  execute function set_subscribers_updated_at();
