// supabase-config.js
// REPLACE WITH YOUR ACTUAL VALUES FROM SUPABASE

const SUPABASE_URL = 'https://bccuwxxfcznrqxdlbzjr.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEYeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjY3V3eHhmY3pucnF4ZGxiempyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTA2OTYsImV4cCI6MjA5MjI4NjY5Nn0.8uG7G-6D8OjoPskzlRZoC6fPINCqNLeXYurTXA-oudo';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);