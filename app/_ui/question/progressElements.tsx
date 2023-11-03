import { ResetIcon } from '../icons';

type Props = {
    index: number;
    click: (index: number) => void;
};

export const ProgressCircle: React.FunctionComponent<Props> = (props) => {
    const { index, click } = props;

    return (
        <div
            className={`px-3 py-1 rounded-full bg-orange text-white cursor-pointer lg:px-7 lg:py-5 lg:text-2xl last:border-4 last:border-dark-green`}
            onClick={() => click(index)}>
            {index + 1}
        </div>
    );
};

export const ProgressEnd: React.FunctionComponent<Props> = (props) => {
    const { click } = props;

    return (
        <div
            className={`px-3 py-1 rounded-full bg-dark-green text-white cursor-pointer lg:px-7 lg:py-5 lg:text-2xl last:border-4 last:border-dark-green`}
            onClick={() => click(0)}>
            <div className='flex items-center lg:text-2xl'>
                <ResetIcon />
                <p>Recommencez</p>
            </div>
        </div>
    );
};

export const ProgressSpacer: React.FunctionComponent = () => {
    return <div className='w-4 h-0 border-b-2 border-b-orange lg:w-14'></div>;
};
