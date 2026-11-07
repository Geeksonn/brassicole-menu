import { Suspense } from 'react';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import RoutesComponent, { RoutesView } from '@/_ui/route/routesComponent';
import { getBeers, getRoutes } from '@/lib/queries';
import { createClient } from '@/lib/supabase';

export const dynamic = 'force-static';

export default async function RoutePage() {
    const supabase = createClient();
    const [routesWithBeers, beers] = await Promise.all([getRoutes(supabase), getBeers(supabase)]);
    const { routes, routeBeers } = routesWithBeers;
    const props = { routes, routeBeers, beers };

    return (
        <PageWrapper>
            <Header title='Nos routes' />
            {/* The page is static: `?route=N` is only read client-side. Until then the
                prerendered HTML shows the first route. */}
            <Suspense fallback={<RoutesView {...props} routeDisplayed={0} />}>
                <RoutesComponent {...props} />
            </Suspense>
            <FooterMenu menuActive={2} />
        </PageWrapper>
    );
}
