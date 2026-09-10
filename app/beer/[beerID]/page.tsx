import BeerDetailBackButton from '@/_ui/beer/beerDetailBackButton';
import BeerLayout from '@/_ui/beer/beerLayout';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import { getActiveBeerIds, getBeerById } from '@/lib/queries';
import { createClient } from '@/lib/supabase';

export const dynamic = 'force-static';
// Only the beers known at build time get a page; any other id returns a 404.
export const dynamicParams = false;

export async function generateStaticParams() {
    const supabase = createClient();
    const ids = await getActiveBeerIds(supabase);
    return ids.map((beerID) => ({ beerID }));
}

export default async function BeerPage(props: { params: Promise<{ beerID: string }> }) {
    const params = await props.params;
    const supabase = createClient();
    const beer = await getBeerById(supabase, params.beerID);
    if (!beer) throw new Error('Trying to get a beer that was not found');

    return (
        <PageWrapper>
            <Header title='Détail de la bière' />
            <div className='flex flex-col mx-4'>
                <BeerDetailBackButton />
                {beer !== undefined && <BeerLayout beer={beer} />}
            </div>
            <FooterMenu menuActive={1} />
        </PageWrapper>
    );
}
