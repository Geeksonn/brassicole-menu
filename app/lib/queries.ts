import { Beer, QuestionsAndOptions, RouteWithBeers } from '@/types';
import { SupabaseClient } from '@supabase/supabase-js';

export const getBeers = async (supabase: SupabaseClient): Promise<Beer[]> => {
    const { data: beers, error } = await supabase
        .from('beers')
        .select('*, editions!inner()')
        .eq('editions.active', true);

    if (error) {
        console.error('Error fetching beers:', error);
        return [];
    }

    return beers;
};

export const getBeerById = async (supabase: SupabaseClient, beerId: string): Promise<Beer> => {
    const { data: beer, error } = await supabase.from('beers').select('*').eq('id', beerId).single();

    if (error) {
        console.error('Error fetching beer by ID:', error);
        throw error;
    }

    return beer;
};

export const getRoutes = async (supabase: SupabaseClient) : Promise<RouteWithBeers> => {
    const { data: routes, error } = await supabase
        .from('routes')
        .select('*, editions!inner()')
        .eq('editions.active', true);

    if (error) {
        console.error('Error fetching routes:', error);
        throw error;
    }

    const { data: routeBeers, error: routeBeersError } = await supabase.rpc('get_route_menu');

    if (routeBeersError) {
        console.error('Error fetching route beers:', routeBeersError);
        throw routeBeersError;
    }

    return { routes: routes, routeBeers: routeBeers };
};

export const getQuestionsNew = async (supabase: SupabaseClient): Promise<QuestionsAndOptions[]> => {
    const { data: questionsAndOptions, error } = await supabase
        .from('questions')
        .select(
            `id, qid, question, 
            editions!inner (name),
            options (id, option, next_question, selected_beer, selected_beer_id)`
        )
        .eq('editions.active', true)
        .order('qid', { ascending: true });
    if (error) {
        console.error('Error fetching questions:', error);
        return [];
    }

    return questionsAndOptions;
};
