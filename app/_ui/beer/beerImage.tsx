import { MAX_WIDTH_MOB } from '../constants';
import useMediaQuery from '../useMediaQuery';

type Props = {
    image: string;
};

const BeerImage: React.FunctionComponent<Props> = ({ image }) => {
    //const isMobile = useMediaQuery(MAX_WIDTH_MOB);
    const isMobile = false;
    const imgPath = `${process.env.NEXT_PUBLIC_CDN}/${image}`;

    return (
        <div className='pl-6 pr-10 -mt-12 lg:pl-16 lg:pr-20'>
            <img src={imgPath} className={isMobile ? 'w-16' : 'w-32'} />
        </div>
    );
};

export default BeerImage;
