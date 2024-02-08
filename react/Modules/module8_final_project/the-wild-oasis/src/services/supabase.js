import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vqgluqgcpaadnkubyywn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZ2x1cWdjcGFhZG5rdWJ5eXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNzAwODMsImV4cCI6MjAyMjk0NjA4M30.Q0f-6PUXW_Cv-1y52ZIknvoDU99lIawKtzh9bo0ACzU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
