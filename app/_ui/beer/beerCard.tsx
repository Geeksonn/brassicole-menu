import { Beer } from '@/types';
import BeerInfoPill from './beerInfoPill';
import Link from 'next/link';

const BeerCard: React.FunctionComponent<Beer> = (beer) => {
    const imgUrl = process.env.NEXT_PUBLIC_IMG_CDN + (beer.imagecard || '') + '/';

    return (
        <Link href={`/beer/${beer.id}/`}>
            <div className='flex justify-evenly w-72 h-[155px] bg-white rounded-md cursor-pointer shadow-default lg:w-[450px] lg:py-4 lg:mb-6 lg:mt-1'>
                <div className='w-1/3 -mt-8'>
                    <img src={imgUrl} className='h-40 mx-auto' />
                </div>
                <div className='flex flex-col w-2/3'>
                    <div className='flex justify-between items-center pr-2'>
                        <h2 className='font-title font-bold text-xl text-dark-green'>{beer.name}</h2>
                        {beer.container === 'Fût' ? (
                            <img src='/tapBeer.svg' className='w-12 lg:w-28 lg:-mt-12' />
                        ) : null}
                    </div>
                    <p className='text-base text-light-grey'>{beer.type}</p>
                    <div className='flex flex-col space-y-1 mt-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0'>
                        <BeerInfoPill info={`${beer.degree_integer},${beer.degree_decimal} %`} />
                        <BeerInfoPill info={`IBU ${beer.ibu}`} />
                        {beer.ebc > -1 ? <BeerInfoPill info={`EBC ${beer.ebc}`} /> : null}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BeerCard;
