import { ACCENT_PINK, ACCENT_ORANGE } from '@/_ui/constants';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import RouteList from '@/_ui/route/routeList';
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
            {routes.length > 0 && beers.length > 0 ? (
                <div className='flex justify-evenly'>
                    <RouteList
                        accent={ACCENT_PINK}
                        routeNr='01'
                        route={routes[0]}
                        routeBeers={routeBeers.filter((r) => r.route === routes[0].id)}
                        beers={beers}
                    />
                    <RouteList
                        accent={ACCENT_ORANGE}
                        routeNr='02'
                        route={routes[1]}
                        routeBeers={routeBeers.filter((r) => r.route === routes[1].id)}
                        beers={beers}
                    />
                </div>
            ) : (
                <p>Aucune donnée</p>
            )}
            <FooterMenu menuActive={2} />
        </PageWrapper>
    );
}
