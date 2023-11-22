import { Beer, Route } from '@/types';
import RouteTitle from './routeTitle';
import RouteElement from './routeElement';

type Props = {
    accent: string;
    routeNr: string;
    route: Route;
    beers: Beer[];
};

const RouteList: React.FunctionComponent<Props> = ({ accent, routeNr, route, beers }) => {
    return (
        <div className='flex flex-col gap-y-20 mb-32'>
            <RouteTitle title={route.name} number={routeNr} accent={accent} />
            {route.beers.map((elt, ind) => (
                <RouteElement
                    key={`route_${routeNr}_elt_${ind}`}
                    accent={accent}
                    last={route.beers.length === ind + 1}
                    first={ind === 0}
                    beer={beers.find((b) => b._id === elt._id) as Beer}
                />
            ))}
        </div>
    );
};

export default RouteList;
