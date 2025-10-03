import { Options } from '@/types';

type Props = {
    options: Options[];
    handleClick: (option: number) => void;
};

const ChoiceButtons: React.FunctionComponent<Props> = ({ options, handleClick }) => {
    return (
        <div className='flex flex-col space-y-3 mt-14 mb-4 lg:mx-20 lg:space-y-10'>
            {options.map((opt, ind) => (
                <button
                    key={ind}
                    className='px-8 py-1 rounded-full text-white text-lg bg-orange lg:px-20 lg:py-8 lg:font-bold lg:text-3xl'
                    onClick={() => handleClick(ind)}>
                    {opt.option}
                </button>
            ))}
        </div>
    );
};

export default ChoiceButtons;
