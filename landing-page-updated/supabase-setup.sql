-- Run this in Supabase → SQL Editor

create table waitlist (
  id bigint generated always as identity primary key,
  email text not null unique,
  workday text,
  calendar text,
  problem text,
  hours text,
  would_pay text,
  created_at timestamptz default now()
);
