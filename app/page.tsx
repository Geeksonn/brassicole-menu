import BeersList from './_ui/beer/beerList';
import FooterMenu from './_ui/footerMenu';
import Header from './_ui/header';
import PageWrapper from './_ui/pageWrapper';
import { getBeers } from './lib/beers';
import { Beer } from './types';

const getData = async () => {
    console.log('before getting beers');
    const beers: Beer[] = await getBeers();

    return beers;
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
