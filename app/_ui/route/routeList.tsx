import { Beer, Route, RouteBeers, RouteWithBeers } from '@/types';
import RouteTitle from './routeTitle';
import RouteElement from './routeElement';

type Props = {
    accent: string;
    routeNr: string;
    route: Route;
    routeBeers: RouteBeers[];
    beers: Beer[];
};

const RouteList: React.FunctionComponent<Props> = ({ accent, routeNr, route, routeBeers, beers }) => {
    return (
        <div className='flex flex-col gap-y-12 mb-32'>
            <RouteTitle title={route.name} number={routeNr} accent={accent} />
            {routeBeers.map((elt, ind) => (
                <RouteElement
                    key={elt.id}
                    accent={accent}
                    last={routeBeers.length === ind + 1}
                    first={ind === 0}
                    beer={beers.find((b) => b.id === elt.beer_id) as Beer}
                />
            ))}
        </div>
    );
};

export default RouteList;
