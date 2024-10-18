import { ACCENT_PINK, ACCENT_ORANGE } from '@/_ui/constants';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import RouteList from '@/_ui/route/routeList';
import { getBeers } from '@/lib/beers';
import { getRoutes } from '@/lib/routes';

export default async function RoutePage() {
    const [routes, beers] = await Promise.all([getRoutes(), getBeers()]);

    return (
        <PageWrapper>
            <Header title='Nos routes' />
            {routes.length > 0 && beers.length > 0 ? (
                <div className='flex justify-evenly'>
                    <RouteList accent={ACCENT_PINK} routeNr='01' route={routes[0]} beers={beers} />
                    <RouteList accent={ACCENT_ORANGE} routeNr='02' route={routes[1]} beers={beers} />
                </div>
            ) : (
                <p>Aucune donnée</p>
            )}
            <FooterMenu menuActive={2} />
        </PageWrapper>
    );
}

export const revalidate = 10; // 10 seconds --> to change after tests
