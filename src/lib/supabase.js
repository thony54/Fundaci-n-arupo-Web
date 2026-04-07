import { createClient } from '@supabase/supabase-js'

// Providing fallbacks prevents the entire React app from crashing (white screen) 
// if Vercel misses the variables during build time.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
