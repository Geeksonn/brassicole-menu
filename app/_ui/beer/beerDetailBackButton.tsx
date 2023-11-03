'use client';

import { useRouter } from 'next/navigation';
import { LeftArrowIcon } from '../icons';

const BeerDetailBackButton: React.FunctionComponent = () => {
    const router = useRouter();

    return (
        <div
            className='flex -mt-10 mx-auto px-6 py-4 rounded-[100px] bg-dark-green cursor-pointer max-w-xs font-normal tracking-widest text-white uppercase lg:ml-14'
            onClick={() => router.back()}>
            <i className='mr-7'>
                <LeftArrowIcon />
            </i>
            <p>Retour à la carte</p>
        </div>
    );
};

export default BeerDetailBackButton;
