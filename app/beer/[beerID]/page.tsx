import BeerDetailBackButton from '@/_ui/beer/beerDetailBackButton';
import BeerLayout from '@/_ui/beer/beerLayout';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import { getBeerById } from '@/lib/queries';
import { createClient } from '@/lib/supabase';

export default async function BeerPage({ params }: { params: { beerID: string } }) {
    const supabase = await createClient();
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
