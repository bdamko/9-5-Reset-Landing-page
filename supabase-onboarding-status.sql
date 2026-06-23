-- Run this in Supabase -> SQL Editor
-- Backs the extension's "has this email already finished onboarding"
-- check, so signing in again (new device, reinstalled extension, cleared
-- storage) with an already-onboarded email skips the onboarding questions
-- instead of re-asking them.
--
-- Unlike subscribers.sql, writes happen client-side (the extension itself,
-- using the signed-in user's own JWT) right after onboarding completes —
-- there's no server webhook involved here, so authenticated users need
-- insert/update access to their own row, not just select.

create table if not exists onboarding_status (
  email text primary key,
  onboarded boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table onboarding_status enable row level security;

drop policy if exists "Users can read own onboarding row" on onboarding_status;
create policy "Users can read own onboarding row"
  on onboarding_status
  for select
  to authenticated
  using (lower(auth.email()) = lower(email));

drop policy if exists "Users can upsert own onboarding row" on onboarding_status;
create policy "Users can upsert own onboarding row"
  on onboarding_status
  for insert
  to authenticated
  with check (lower(auth.email()) = lower(email));

drop policy if exists "Users can update own onboarding row" on onboarding_status;
create policy "Users can update own onboarding row"
  on onboarding_status
  for update
  to authenticated
  using (lower(auth.email()) = lower(email))
  with check (lower(auth.email()) = lower(email));

create or replace function set_onboarding_status_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists onboarding_status_set_updated_at on onboarding_status;
create trigger onboarding_status_set_updated_at
  before update on onboarding_status
  for each row
  execute function set_onboarding_status_updated_at();
