import React from 'react';

import GlobalState from '@context/globalState';
import { CHOICE_PAGE } from '@lib/constants';
import { Beers, Questions } from '@lib/types';
import { defaultBeer, defaultQuestion } from '@lib/defaultValue';

import Layout from '@components/layout';
import ChoiceQuestion from '@components/choiceQuestion';

import css from '@styles/choice.module.css';

const Choice = () => {
    const { data } = React.useContext(GlobalState);
    const [currentQuestion, setCurrentQuestion] = React.useState<Questions>(defaultQuestion);
    const [selectedBeer, setSelectedBeer] = React.useState<Beers>(defaultBeer);
    const [questionHistory, setQuestionHistory] = React.useState<number[]>([]);

    React.useEffect(() => {
        if (data.questions.length > 0) {
            setQuestion(data.questions[0]);
        }
    }, [JSON.stringify(data.questions)]);

    const setQuestion = (question: Questions) => {
        setCurrentQuestion(question);
        setQuestionHistory([...questionHistory, question.qid]);
    };

    const resetQuestion = (index: number) => {
        const question = data.questions.find((q) => q.qid === questionHistory[index]);

        if (question) {
            setCurrentQuestion(question);
            setQuestionHistory(questionHistory.filter((qh, ind) => ind <= index));
        } else {
            console.error(
                'Reset Question to ' + questionHistory[index] + ' (' + index + ') --> NOT FOUND !!',
                data.questions
            );
            setCurrentQuestion(data.questions[0]);
            setQuestionHistory([data.questions[0].qid]);
        }
        setSelectedBeer(defaultBeer);
    };

    const handleClick = (option: number) => {
        const selectedOption = currentQuestion.options[option];
        if (selectedOption.nextQuestion > 0) {
            let nextQuestion = data.questions.find((q) => q.qid === selectedOption.nextQuestion);
            if (nextQuestion) {
                setQuestion(nextQuestion);
            }
        } else {
            const beer = data.beers.find((b) => b.name === selectedOption.selectedBeer);
            if (beer) {
                setSelectedBeer(beer);
            }
        }
    };

    const progressClick = (index: number) => {
        if (index < questionHistory.length) {
            resetQuestion(index);
        }
    };

    return (
        <Layout title='Arbre de choix' activePage={CHOICE_PAGE}>
            {currentQuestion !== defaultQuestion ? (
                <ChoiceQuestion
                    question={currentQuestion}
                    selectedBeer={selectedBeer}
                    progress={questionHistory.length}
                    handleClick={handleClick}
                    progressClick={progressClick}
                />
            ) : (
                <div>Loading ...</div>
            )}
        </Layout>
    );
};

export default Choice;
