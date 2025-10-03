'use client';

import React from 'react';

import { Question, Beer, QuestionsAndOptions } from '@/types';
import Progress from './progress';
import ChoiceButtons from './choiceButtons';
import BeerLayout from '../beer/beerLayout';

type Props = {
    questions: QuestionsAndOptions[];
    beers: Beer[];
};

const QuestionComponent: React.FunctionComponent<Props> = ({ questions, beers }) => {
    const [currentQuestion, setCurrentQuestion] = React.useState<QuestionsAndOptions>(questions[0]);
    const [selectedBeer, setSelectedBeer] = React.useState<Beer>();
    const [qids, setQids] = React.useState<number[]>([questions[0].qid]);

    const resetQuestion = (index: number) => {
        const question = questions.find((q) => q.qid === qids[index]);

        if (question) {
            setCurrentQuestion(question);
            setQids(qids.filter((qid, ind) => ind <= index));
        } else {
            console.error(`Reset Question to ${qids[index]} (${index}) --> NOT FOUND !!`, questions);
            setCurrentQuestion(questions[0]);
            setQids([questions[0].qid]);
        }
        setSelectedBeer(undefined);
    };

    const progressClick = (index: number) => {
        if (index < qids.length) {
            resetQuestion(index);
        }
    };

    const choiceClick = (option: number) => {
        const selectedOption = currentQuestion.options[option];
        if (selectedOption.next_question > 0) {
            let nextQuestion = questions.find((q) => q.qid === selectedOption.next_question);
            if (nextQuestion) {
                setCurrentQuestion(nextQuestion);
                setQids([...qids, nextQuestion.qid]);
            }
        } else {
            const beerIndex = beers.findIndex((b) => b.id === selectedOption.selected_beer_id);
            if (selectedOption.selected_beer_id === null) {
                console.error('No beer selected for option', selectedOption);
                setSelectedBeer(undefined);
            }
            setSelectedBeer(beers[beerIndex]);
        }
    };

    return (
        <div className='flex flex-col mx-4 mt-2 mb-40 lg:mx-12 lg:mt-12'>
            <Progress qids={qids} selectedBeer={selectedBeer !== undefined} progressClick={progressClick} />

            {selectedBeer === undefined ? (
                <div className='flex flex-col p-8 mt-4 rounded-lg bg-white shadow-default lg:mt-12'>
                    <div className='-mt-10 mb-6 mx-auto px-4 py-2 bg-dark-green rounded-xl font-title font-semibold text-white text-xl lg:text-3xl lg:px-12 lg:py-6 lg:-mt-16'>
                        Laissez-vous guider !
                    </div>
                    <div className='mx-auto text-lg font-semibold lg:text-5xl lg:my-10'>
                        {currentQuestion.question}
                    </div>
                    <ChoiceButtons options={currentQuestion.options} handleClick={choiceClick} />
                </div>
            ) : (
                <BeerLayout beer={selectedBeer} />
            )}
        </div>
    );
};

export default QuestionComponent;
