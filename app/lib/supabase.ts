import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

/**
 * Supabase client used for build-time data fetching.
 *
 * Every page reads its data through this client while the site is being built
 * (the page files opt into static rendering with `export const dynamic = 'force-static'`).
 * The results are baked into the static output and are NOT refreshed until the
 * next build / deploy.
 *
 * There is no auth in this app, so no cookie/session handling is needed here.
 */
export function createClient() {
    return createSupabaseClient<Database>(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_PUBLISHABLE_KEY!
    );
}
