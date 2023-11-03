import { Beer } from '@/types';
import BeerInfoPill from './beerInfoPill';
import Link from 'next/link';

const BeerCard: React.FunctionComponent<Beer> = (beer) => {
    const imgUrl = process.env.NEXT_PUBLIC_IMG_CDN + beer.imageCard + '/';

    return (
        <Link href={`/beer/${beer._id}/`}>
            <div className='flex justify-evenly w-72 mb-11 py-4 bg-white rounded-md cursor-pointer shadow-default lg:w-[450px] lg:py-4 lg:mb-16 lg:mt-2'>
                <div className='w-1/3 -mt-10'>
                    <img src={imgUrl} className='h-40 mx-auto' />
                </div>
                <div className='flex flex-col w-2/3'>
                    <div className='flex justify-between items-center pr-2'>
                        <h2 className='font-title font-bold text-2xl text-dark-green'>{beer.name}</h2>
                        {beer.container === 'Fût' ? (
                            <img src='/tapBeer.svg' className='w-12 lg:w-28 lg:-mt-12' />
                        ) : null}
                    </div>
                    <p className='text-base text-light-grey'>{beer.type}</p>
                    <div className='flex flex-col space-y-3 mt-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0'>
                        <BeerInfoPill info={`${beer.degree.integer},${beer.degree.decimal} %`} />
                        <BeerInfoPill info={`IBU ${beer.ibu}`} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BeerCard;
