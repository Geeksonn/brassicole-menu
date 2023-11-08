import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import QuestionComponent from '@/_ui/question/questionComponent';
import { Question } from '@/types';

const getData = async (): Promise<Question[]> => {
    const questionUrl = process.env.ATLAS_API_URL + '/questions';
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'api-key': process.env.ATLAS_API_KEY || '',
        },
    };

    const res = await fetch(questionUrl, options);
    if (!res.ok) {
        console.error('Error while getting data', res.status);
        return [];
    }

    return await res.json();
};

export default async function MenuPage() {
    const questions = await getData();

    return (
        <PageWrapper>
            <Header title='Arbre de choix' />
            {questions.length > 0 ? (
                <QuestionComponent questions={questions} />
            ) : (
                <p>Aucunée donnée</p>
            )}
            <FooterMenu menuActive={3} />
        </PageWrapper>
    );
}

export const revalidate = 10; // 10 seconds --> to change after tests
