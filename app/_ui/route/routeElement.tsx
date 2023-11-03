import { roseEllips, roseLine, yellowEllips, yellowLine } from '@/_ui/icons';
import { ACCENT_PINK } from '@/_ui/constants';
import BeerCard from '@/_ui/beer/beerCard';
import { Beer } from '@/types';

type Props = {
    accent: string;
    last: boolean;
    first: boolean;
    beer: Beer;
};

const RouteElement: React.FunctionComponent<Props> = ({ accent, last, first, beer}) => {
    const ellips = accent === ACCENT_PINK ? roseEllips : yellowEllips;
    const line = accent === ACCENT_PINK ? roseLine : yellowLine;

    return (
        <div className={`flex ${first ? '' : '-mt-14'}`}>
            <div className='flex flex-col items-center'>
                <i>{ellips}</i>
                {last ? null : <i>{line}</i>}
            </div>
            <BeerCard {...beer} />
        </div>
    );
};

export default RouteElement;
