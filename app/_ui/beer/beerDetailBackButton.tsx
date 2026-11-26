'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { LeftArrowIcon } from '../icons';

/** Where the visitor opened the beer from, passed as `?from=` by `BeerCard`. */
export type BeerOrigin = 'carte' | 'routes';

const LABELS: Record<BeerOrigin, string> = {
    carte: 'Retour à la carte',
    routes: 'Retour à la route',
};

/** Back button with a label matching the page the visitor came from. */
export const BeerDetailBackButtonView: React.FunctionComponent<{ origin: BeerOrigin }> = ({ origin }) => {
    const router = useRouter();

    return (
        <div
            className='flex -mt-10 mx-auto px-6 py-4 rounded-[100px] bg-dark-green cursor-pointer max-w-xs font-normal tracking-widest text-white uppercase lg:ml-14'
            onClick={() => router.back()}>
            <i className='mr-7'>
                <LeftArrowIcon />
            </i>
            <p>{LABELS[origin]}</p>
        </div>
    );
};

/** Reads the origin from `?from=`; anything else falls back to the menu ("la carte"). */
const BeerDetailBackButton: React.FunctionComponent = () => {
    const searchParams = useSearchParams();
    const origin: BeerOrigin = searchParams.get('from') === 'routes' ? 'routes' : 'carte';

    return <BeerDetailBackButtonView origin={origin} />;
};

export default BeerDetailBackButton;
