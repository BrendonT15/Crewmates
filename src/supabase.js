import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://zaumqvupvvfzavomlusk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphdW1xdnVwdnZmemF2b21sdXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NzI2MTYsImV4cCI6MjA0NjE0ODYxNn0.EBRDu1Ot9qoIhmPtEeE8kWat1vSkWXfwbN7adHPBwNA";
const supabase = createClient(supabaseURL, supabaseAnonKey);

export default supabase;