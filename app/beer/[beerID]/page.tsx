import BeerDetailBackButton from '@/_ui/beer/beerDetailBackButton';
import BeerLayout from '@/_ui/beer/beerLayout';
import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import { Beer } from '@/types';

const getData = async (beerID: string): Promise<Beer | undefined> => {
    const beerUrl = `${process.env.ATLAS_API_URL}/beers?beerId=${beerID}`;
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'api-key': process.env.ATLAS_API_KEY || '',
        },
    };

    const res = await fetch(beerUrl, options);
    if (!res.ok) {
        console.error('Error while getting data', res.status);
        return undefined;
    }

    return await res.json();
};

export default async function BeerPage({ params }: { params: { beerID: string } }) {
    const beer = await getData(params.beerID);

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
