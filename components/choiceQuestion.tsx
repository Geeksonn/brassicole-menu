import React from 'react';

import { Beers, QuestionOption, Questions } from '@lib/types';

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

type ChoiceButtonsProps = {
    options: QuestionOption[];
    handleClick: (option: number) => void;
};

const ChoiceButtons: React.FunctionComponent<ChoiceButtonsProps> = (props) => {
    const { options, handleClick } = props;

    return (
        <div className={css.buttonWrapper}>
            {options.map((opt, ind) => (
                <button key={ind} className={`${css.button} bg-orange`} onClick={() => handleClick(ind)}>
                    {opt.option}
                </button>
            ))}
        </div>
    );
};

const ChoiceQuestion: React.FunctionComponent<ChoiceQuestionProps> = (props) => {
    const { question, selectedBeer, progress, handleClick, progressClick } = props;

    return (
        <div className={css.wrapper}>
            <ChoiceProgress
                position={progress}
                selectedBeer={selectedBeer.name !== ''}
                progressClick={progressClick}
            />
            {selectedBeer.name === '' ? (
                <div className={`${css.choiceWrapper} `}>
                    <div className={css.choiceTitle}>
                        {/*Répondez au questionnaire pour découvrir la bière faite pour vous !*/}
                        Découvrez LA bière faite pour vous !
                    </div>
                    <div className='mx-auto text-lg'>{question.question}</div>
                    <ChoiceButtons options={question.options} handleClick={handleClick} />
                </div>
            ) : (
                <BeerLayout beer={selectedBeer} imgSrc={selectedBeer.imageCard} imgW={71} imgH={289} />
            )}
        </div>
    );
};

export default ChoiceQuestion;
