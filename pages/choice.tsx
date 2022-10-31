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

    React.useEffect(() => {
        const question = data.questions.length > 0 ? data.questions[0] : defaultQuestion;
        setCurrentQuestion(question);
    }, [JSON.stringify(data.questions)]);

    const handleClick = (option: number) => {
        const selectedOption = option === 1 ? currentQuestion.resultOption1 : currentQuestion.resultOption2;
        if (selectedOption.nextQuestion > 0) {
            let nextQuestion = data.questions.find((q) => q.qid === selectedOption.nextQuestion);
            if (nextQuestion) {
                setCurrentQuestion(nextQuestion);
            }
        } else {
            const beer = data.beers.find((b) => b.name === selectedOption.selectedBeer);
            if (beer) {
                setSelectedBeer(beer);
            }
        }
    };

    return (
        <Layout title='Arbre de choix' activePage={CHOICE_PAGE}>
            {currentQuestion !== defaultQuestion ? (
                <ChoiceQuestion question={currentQuestion} selectedBeer={selectedBeer} handleClick={handleClick} />
            ) : (
                <div>Loading ...</div>
            )}
        </Layout>
    );
};

export default Choice;
