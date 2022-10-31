import React from 'react';

import { Beers, Questions } from '@lib/types';

import css from '@styles/choice.module.css';
import BeerLayout from './beerLayout';

type ChoiceQuestionProps = {
    question: Questions;
    selectedBeer: Beers;
    handleClick: (option: number) => void;
};

const ChoiceQuestion: React.FunctionComponent<ChoiceQuestionProps> = ({ question, selectedBeer, handleClick }) => {
    return (
        <>
            {selectedBeer.name === '' ? (
                <div className={css.wrapper}>
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
                <BeerLayout beer={selectedBeer} imgSrc='/beer_cropped.png' imgW={71} imgH={289} />
            )}
        </>
    );
};

export default ChoiceQuestion;
