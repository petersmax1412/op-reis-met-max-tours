create table if not exists public.user_tours (
  user_id uuid not null references auth.users(id) on delete cascade,
  tour_id text not null,
  unlocked boolean not null default false,
  completed integer[] not null default '{}',
  purchased_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, tour_id)
);

alter table public.user_tours enable row level security;

create policy "Users can read their own tours"
on public.user_tours
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can create their own tours"
on public.user_tours
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own tours"
on public.user_tours
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_user_tours_updated_at on public.user_tours;

create trigger set_user_tours_updated_at
before update on public.user_tours
for each row
execute function public.set_updated_at();
