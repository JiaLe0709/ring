/**
 * Initialize and connect Supabase
 * (Last Update: 2025-06-13)
 */
import { createClient } from '@supabase/supabase-js'

export default createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
)