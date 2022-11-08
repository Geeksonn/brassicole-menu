import React from 'react';

import css from '@styles/choice.module.css';

type ChoiceProgressProps = {
    position: number;
    selectedBeer: boolean;
    progressClick: (index: number) => void;
};

type CircleProps = {
    text: string;
    index: number;
    className: string;
    click: (index: number) => void;
};

const ProgressCircle: React.FunctionComponent<CircleProps> = (props) => {
    const { text, index, className, click } = props;
    return (
        <div className={`${css.progressCircle} ${className}`} onClick={() => click(index - 1)}>
            {text}
        </div>
    );
};

const ProgressSpacer: React.FunctionComponent = () => {
    return <div className={css.progressSpacer}></div>;
};

const ChoiceProgress: React.FunctionComponent<ChoiceProgressProps> = (props) => {
    const { position, selectedBeer, progressClick } = props;

    const buildProgressJsx = () => {
        let jsx = [];

        for (let i = 0; i < position; i++) {
            jsx.push(
                <ProgressCircle
                    key={`circle_${i}`}
                    text={(i + 1).toString()}
                    index={i + 1}
                    className='bg-orange'
                    click={progressClick}
                />
            );
            if (i < position - 1) {
                jsx.push(<ProgressSpacer key={`spacer_${i}`} />);
            }
        }

        if (selectedBeer) {
            jsx.push(<ProgressSpacer key={`spacer_${position}`} />);
            jsx.push(
                <ProgressCircle
                    key={`circle_${position}`}
                    text={'V'}
                    index={position + 1}
                    className='bg-dark-green'
                    click={progressClick}
                />
            );
        }

        return jsx;
    };

    return <div className={css.progressWrapper}>{buildProgressJsx()}</div>;
};

export default ChoiceProgress;
