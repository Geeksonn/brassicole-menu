type Props = {
    info: string;
};

const BeerInfoPill: React.FunctionComponent<Props> = ({ info }) => {
    return (
        <div className='px-5 py-2 w-fit bg-very-light-grey rounded-[90px] font-light text-red text-sm'>{info}</div>
    );
};

export default BeerInfoPill;
