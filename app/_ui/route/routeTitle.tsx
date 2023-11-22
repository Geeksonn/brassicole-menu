import { ACCENT_PINK } from '@/_ui/constants';

type Props = {
    accent: string;
    number: string;
    title: string;
};

const RouteTitle: React.FunctionComponent<Props> = ({ accent, number, title }) => {
    const bgColor = accent === 'pink' ? 'bg-pink' : 'bg-orange';
    return (
        <div className={`flex items-center -mt-6 mb-20 rounded-full lg:mt-12 lg:mb-20 ${bgColor}`}>
            <div className='pl-1 pr-5 font-title font-bold text-5xl text-white/30 lg:text-8xl lg:pl-2'>
                {number}
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-white lg:text-base'>Route</p>
                <p className='-mt-1 font-title font-semibold text-xl text-white lg:text-4xl'>{title}</p>
            </div>
        </div>
    );
};

export default RouteTitle;
