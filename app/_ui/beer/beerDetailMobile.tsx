import { Beer } from '@/types';
import BeerImage from './beerImage';
import BeerInfoPill from './beerInfoPill';
import { BreweryIcon } from '../icons';

const BeerDetailMobile: React.FunctionComponent<Beer> = (beer) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-evenly'>
                <BeerImage image={beer.imagecard || ''} />
                <div className='flex flex-col grow py-4 lg:py-16'>
                    <h1>{beer.name}</h1>
                    <div className='flex justify-between items-center pr-2'>
                        <p className='mt-1 text-lg font-light text-light-grey'>{beer.type}</p>
                        {beer.container === 'Fût' ? (
                            <img src='/tapBeer.svg' className='w-12 lg:w-16' />
                        ) : null}
                    </div>
                    <div className='flex mt-4'>
                        <BeerInfoPill info={`${beer.degree_integer},${beer.degree_decimal} %`} />
                        <BeerInfoPill info={`IBU ${beer.ibu}`} />
                    </div>
                    <div className='flex w-full mt-9 pb-3 border-b border-b-dark-white'>
                        <i className='mr-3'>
                            <BreweryIcon />
                        </i>
                        <p className='text-dark-green'>{beer.brewery}</p>
                    </div>
                </div>
            </div>
            <p className='mb-6 font-light whitespace-pre-line'>{beer.description}</p>
        </div>
    );
};

export default BeerDetailMobile;
