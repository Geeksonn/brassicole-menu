import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import QuestionComponent from '@/_ui/question/questionComponent';
import { getQuestions } from '@/lib/questions';
import { Question } from '@/types';

export default async function MenuPage() {
    const questions = await getQuestions();

    return (
        <PageWrapper>
            <Header title='Arbre de choix' />
            {questions.length > 0 ? (
                <QuestionComponent questions={questions as Question[]} />
            ) : (
                <p>Aucunée donnée</p>
            )}
            <FooterMenu menuActive={3} />
        </PageWrapper>
    );
}

export const revalidate = 10; // 10 seconds --> to change after tests
