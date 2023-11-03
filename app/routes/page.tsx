import { ACCENT_PINK, ACCENT_ORANGE } from '@/_ui/constants';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import RouteList from '@/_ui/route/routeList';
import { Beer, Route } from '@/types';

const getData = async (): Promise<{ beers: Beer[]; routes: Route[] }> => {
    const beerUrl = process.env.ATLAS_API_URL + '/beers';
    const routeUrl = process.env.ATLAS_API_URL + '/routes';

    const options: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'api-key': process.env.ATLAS_API_KEY || '',
        },
    };

    const responses = await Promise.all([fetch(beerUrl, options), fetch(routeUrl, options)]);
    if (!responses[0].ok || !responses[1].ok) {
        console.error(
            'Error while getting data',
            responses.map((r) => r.status)
        );
        return { beers: [], routes: [] };
    }

    const results = await Promise.all([responses[0].json(), responses[1].json()]);

    return { beers: results[0], routes: results[1] };
};

export default async function RoutePage() {
    const { routes, beers } = await getData();

    return (
        <PageWrapper>
            <Header title='Nos routes' />
            {routes.length > 0 && beers.length > 0 ? (
                <div className='flex justify-evenly'>
                    <RouteList accent={ACCENT_PINK} routeNr='01' route={routes[0]} beers={beers} />
                    <RouteList accent={ACCENT_ORANGE} routeNr='02' route={routes[1]} beers={beers} />
                </div>
            ) : (<p>Aucune donnée</p>)}
            <FooterMenu menuActive={2} />
        </PageWrapper>
    );
}

export const revalidate = 10; // 10 seconds --> to change after tests
