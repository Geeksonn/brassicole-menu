import { Beer } from '@/types';
import BeerImage from './beerImage';
import BeerInfoPill from './beerInfoPill';
import { BreweryIcon } from '../icons';

const BeerDetail: React.FunctionComponent<Beer> = (beer) => {
    return (
        <>
            <BeerImage image={beer.imageCard} />
            <div className='flex flex-col grow py-4 lg:py-16'>
                <h1 className='font-title font-bold text-4xl text-dark-green'>{beer.name}</h1>
                <div className='flex justify-between items-center pr-2'>
                    <p className='mt-1 text-lg font-light text-light-grey'>{beer.type}</p>
                    {beer.container === 'Fût' ? (
                        <img src='/tapBeer.svg' className='w-12 lg:w-32 lg:-mt-12' />
                    ) : null}
                </div>
                <div className='flex mt-4 space-x-2'>
                    <BeerInfoPill info={`${beer.degree.integer},${beer.degree.decimal} %`} />
                    <BeerInfoPill info={`IBU ${beer.ibu}`} />
                </div>
                <div className='flex w-full mt-9 pb-3 border-b border-b-dark-white'>
                    <i className='mr-3'>
                        <BreweryIcon />
                    </i>
                    <p className='text-dark-green'>{beer.brewery}</p>
                </div>
                <p className='my-6 font-light whitespace-pre-line'>{beer.description}</p>
            </div>
        </>
    );
};

export default BeerDetail;
