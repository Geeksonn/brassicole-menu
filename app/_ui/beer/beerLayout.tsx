import { Beer } from '@/types';
import { MAX_WIDTH_MOB } from '../constants';
import useMediaQuery from '../useMediaQuery';
import BeerDetailMobile from './beerDetailMobile';
import BeerDetail from './beerDetail';

type Props = {
    beer: Beer;
};

const BeerLayout: React.FunctionComponent<Props> = ({ beer }) => {
    //const isMobile = useMediaQuery(MAX_WIDTH_MOB);
    const isMobile = false;

    return (
        <div className='flex justify-evenly mx-6 mt-20 mb-52 px-4 rounded-md bg-white shadow-default lg:px-12 lg:mx-16'>
            {isMobile ? <BeerDetailMobile {...beer} /> : <BeerDetail {...beer} />}
        </div>
    );
};

export default BeerLayout;
