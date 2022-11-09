import React from 'react';

import { Beers, Questions } from '@lib/types';

import css from '@styles/choice.module.css';
import BeerLayout from './beerLayout';
import ChoiceProgress from './choiceProgress';

type ChoiceQuestionProps = {
    question: Questions;
    selectedBeer: Beers;
    progress: number;
    handleClick: (option: number) => void;
    progressClick: (index: number) => void;
};

const ChoiceQuestion: React.FunctionComponent<ChoiceQuestionProps> = (props) => {
    const { question, selectedBeer, progress, handleClick, progressClick } = props;

    return (
        <div className={css.wrapper}>
            <ChoiceProgress position={progress} selectedBeer={selectedBeer.name !== ''} progressClick={progressClick} />
            {selectedBeer.name === '' ? (
                <div className={`${css.choiceWrapper} `}>
                    <div className={css.choiceTitle}>
                        Répondez au questionnaire pour découvrir la bière faite pour vous !
                    </div>
                    <div className='mx-auto text-lg'>{question.question}</div>
                    <div className={css.buttonWrapper}>
                        <button className={`${css.button} bg-orange`} onClick={() => handleClick(1)}>
                            {question.option1}
                        </button>
                        <button className={`${css.button} bg-pink`} onClick={() => handleClick(2)}>
                            {question.option2}
                        </button>
                    </div>
                </div>
            ) : (
                <BeerLayout beer={selectedBeer} imgSrc={selectedBeer.imageCard} imgW={71} imgH={289} />
            )}
        </div>
    );
};

export default ChoiceQuestion;
