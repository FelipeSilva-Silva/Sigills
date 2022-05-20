import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lvpnppxxtynokrxaqodl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cG5wcHh4dHlub2tyeGFxb2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5MDA4MzMsImV4cCI6MTk2ODQ3NjgzM30.3UGqtkVtZ8aAIl23NVAmcMpbkH6wL6p3Y6E4pyrGoqk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;