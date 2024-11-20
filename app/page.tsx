import BeersList from './_ui/beer/beerList';
import FooterMenu from './_ui/footerMenu';
import Header from './_ui/header';
import PageWrapper from './_ui/pageWrapper';
import { getBeers } from './lib/beers';
import { Beer } from './types';

export const dynamic = 'force-dynamic';

export default async function MenuPage() {
    const beers: Beer[] = await getBeers();

    return (
        <PageWrapper>
            <Header title='La carte' />
            {beers.length > 0 ? (
                <BeersList beers={beers.filter((b) => b.displayOnMenu)} />
            ) : (
                <p className='flex justify-center mt-5'>Patience ...</p>
            )}
            <FooterMenu menuActive={1} />
        </PageWrapper>
    );
}
