// initalizing new Supabase client. This is the entrypoint to the rest if the superbase ecosystem


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://pxpnrvpahcyfucjfrcqq.supabase.co'

const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4cG5ydnBhaGN5ZnVjamZyY3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NzYyNzksImV4cCI6MjAzNTQ1MjI3OX0.PAiSQNpqsrhJxDskatXkhLTsfsO-rmjdSci7epLdgd8


export const supabase = createClient(supabaseUrl, supabaseKey);




