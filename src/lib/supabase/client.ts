import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://itgjelzfkitqosylilbi.supabase.co' as const;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Z2plbHpma2l0cW9zeWxpbGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MzUyMTUsImV4cCI6MjA0OTQxMTIxNX0.h48QS42XbsxrVk-1FZ0VqY_cgnlAex-GIsszu_ePqmU' as const;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});