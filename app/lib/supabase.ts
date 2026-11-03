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
 * Requests bypass Next's fetch Data Cache (`cache: 'no-store'`): `force-static` would
 * otherwise cache every Supabase response for a year in `.next/cache`, which Vercel
 * restores between builds — a redeploy could then ship stale data instead of re-reading it.
 *
 * There is no auth in this app, so no cookie/session handling is needed here.
 */
export function createClient() {
    return createSupabaseClient<Database>(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_PUBLISHABLE_KEY!,
        { global: { fetch: (input, init) => fetch(input, { ...init, cache: 'no-store' }) } }
    );
}
