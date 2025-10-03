import { ProgressCircle, ProgressEnd, ProgressSpacer } from './progressElements';

type Props = {
    qids: number[];
    selectedBeer: boolean;
    progressClick: (index: number) => void;
};

const Progress: React.FunctionComponent<Props> = (props) => {
    const { qids, selectedBeer, progressClick } = props;

    return (
        <div className='flex justify-start items-center mb-4 lg:my-12'>
            {qids.map((q, i) => (
                <div key={`progress_elt_${q}`} className='flex items-center'>
                    <ProgressCircle key={`circle_${i}`} index={i} click={progressClick} />
                    {i < qids.length - 1 ? <ProgressSpacer key={`spacer_${i}`} /> : null}
                </div>
            ))}
            {selectedBeer && (
                <div key={`progress_elt_end`} className='flex items-center'>
                    <ProgressSpacer key={`spacer_end`} />
                    <ProgressEnd key={`progress_end`} index={1} click={progressClick} />
                </div>
            )}
        </div>
    );
};

export default Progress;
