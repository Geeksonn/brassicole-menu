
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import RoutesComponent from '@/_ui/route/routesComponent';
import { getBeers, getRoutes } from '@/lib/queries';
import { createClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function RoutePage() {
    const supabase = await createClient();
    const [routesWithBeers, beers] = await Promise.all([getRoutes(supabase), getBeers(supabase)]);
    const { routes, routeBeers } = routesWithBeers;

    return (
        <PageWrapper>
            <Header title='Nos routes' />
            <RoutesComponent routes={routes} routeBeers={routeBeers} beers={beers} />
            <FooterMenu menuActive={2} />
        </PageWrapper>
    );
}
