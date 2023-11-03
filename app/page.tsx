import BeersList from './_ui/beer/beerList';
import FooterMenu from './_ui/footerMenu';
import Header from './_ui/header';
import PageWrapper from './_ui/pageWrapper';

const getData = async () => {
    const url = process.env.ATLAS_API_URL + '/beers';
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'api-key': process.env.ATLAS_API_KEY || '',
        },
    };

    const res = await fetch(url, options);
    if (!res.ok) {
        console.error('Error while getting data', url, options, res.status);
        return [];
    }

    return await res.json();
};

export default async function MenuPage() {
    const beers = await getData();

    return (
        <PageWrapper>
            <Header title='La carte' />
            {beers.length > 0 ? <BeersList beers={beers} /> : <p>Aucune donnée</p>}
            <FooterMenu menuActive={1} />
        </PageWrapper>
    );
}

export const revalidate = 10; // 10 seconds --> to change after tests
