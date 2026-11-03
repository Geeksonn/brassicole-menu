import { Beer, QuestionsAndOptions, RouteBeers, RouteWithBeers } from '@/types';
import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Edition baked into the build.
 *
 * By default the menu is built with the edition flagged `active` in the database.
 * Setting `MENU_EDITION_ID` (an `editions.id`) at build time forces another edition,
 * e.g. on a dedicated test deployment, without touching `editions.active` — which is
 * shared with the other Brassicole apps (stats, order, appicole).
 */
const FORCED_EDITION_ID = process.env.MENU_EDITION_ID?.trim() || null;

if (FORCED_EDITION_ID) {
    console.info(`[menu] Building with forced edition MENU_EDITION_ID=${FORCED_EDITION_ID}`);
}

/** `.eq()` arguments restricting a query joined on `editions!inner()` to the edition being built. */
const EDITION_FILTER: [string, string | boolean] = FORCED_EDITION_ID
    ? ['editions.id', FORCED_EDITION_ID]
    : ['editions.active', true];

export const getBeers = async (supabase: SupabaseClient): Promise<Beer[]> => {
    const { data: beers, error } = await supabase
        .from('beers')
        .select('*, editions!inner()')
        .eq(...EDITION_FILTER);

    if (error) {
        console.error('Error fetching beers:', error);
        return [];
    }

    return beers;
};

export const getActiveBeerIds = async (supabase: SupabaseClient): Promise<string[]> => {
    const { data, error } = await supabase
        .from('beers')
        .select('id, editions!inner()')
        .eq(...EDITION_FILTER);

    if (error) {
        console.error('Error fetching active beer ids:', error);
        return [];
    }

    return data.map((beer) => beer.id);
};

export const getBeerById = async (supabase: SupabaseClient, beerId: string): Promise<Beer> => {
    const { data: beer, error } = await supabase.from('beers').select('*').eq('id', beerId).single();

    if (error) {
        console.error('Error fetching beer by ID:', error);
        throw error;
    }

    return beer;
};

export const getRoutes = async (supabase: SupabaseClient): Promise<RouteWithBeers> => {
    const { data: routes, error } = await supabase
        .from('routes')
        .select('*, editions!inner()')
        .eq(...EDITION_FILTER);

    if (error) {
        console.error('Error fetching routes:', error);
        throw error;
    }

    if (routes.length === 0) return { routes: [], routeBeers: [] };

    // Same shape as the former `get_route_menu` RPC, which only knew about the active
    // edition; filtering on the routes fetched above keeps it in sync with the build edition.
    const { data: rows, error: routeBeersError } = await supabase
        .from('route_beers')
        .select('id, route, order, beer, beers!route_beers_beer_fk(name, type, ibu, degree_integer, degree_decimal)')
        .in(
            'route',
            routes.map((r) => r.id),
        )
        .order('order', { ascending: true });

    if (routeBeersError) {
        console.error('Error fetching route beers:', routeBeersError);
        throw routeBeersError;
    }

    const routeBeers: RouteBeers[] = rows.map((row) => {
        // Many-to-one embed: an object at runtime, typed as an array by the untyped client.
        const beer = Array.isArray(row.beers) ? row.beers[0] : row.beers;
        return {
            id: row.id,
            route: row.route,
            route_order: row.order,
            beer_id: row.beer,
            name: beer?.name ?? null,
            type: beer?.type ?? null,
            ibu: beer?.ibu ?? null,
            degree_integer: beer?.degree_integer ?? null,
            degree_decimal: beer?.degree_decimal ?? null,
        };
    });

    return { routes: routes, routeBeers: routeBeers };
};

export const getQuestionsNew = async (supabase: SupabaseClient): Promise<QuestionsAndOptions[]> => {
    const { data: questionsAndOptions, error } = await supabase
        .from('questions')
        .select(
            `id, qid, question, 
            editions!inner(),
            options!options_question_fkey (id, option, next_question, selected_beer, selected_beer_id)`,
        )
        .eq(...EDITION_FILTER)
        .order('qid', { ascending: true });
    if (error) {
        console.error('Error fetching questions:', error);
        return [];
    }

    return questionsAndOptions;
};
