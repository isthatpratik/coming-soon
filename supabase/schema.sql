-- Create a table for storing waitlist entries
create table if not exists public.waitlist (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null unique,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Create policy to allow only insert operations from authenticated users and anon users
create policy "Allow public insert" on public.waitlist
    for insert
    to anon, authenticated
    with check (true);

-- Create policy to allow only select operations from authenticated users
create policy "Allow authenticated select" on public.waitlist
    for select
    to authenticated
    using (true);

-- Create an index on email for faster lookups and uniqueness checks
create unique index if not exists waitlist_email_idx on public.waitlist (email);

-- Create a function to automatically update the updated_at column
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql security definer;

-- Create a trigger to automatically update the updated_at column
create trigger handle_waitlist_updated_at
    before update on public.waitlist
    for each row
    execute function public.handle_updated_at(); 