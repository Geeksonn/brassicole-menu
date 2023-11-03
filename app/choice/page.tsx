import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import QuestionComponent from '@/_ui/question/questionComponent';
import { Question, Beer } from '@/types';

const getData = async (): Promise<{ questions: Question[]; beers: Beer[] }> => {
    const beerUrl = process.env.ATLAS_API_URL + '/beers';
    const questionUrl = process.env.ATLAS_API_URL + '/questions';
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'api-key': process.env.ATLAS_API_KEY || '',
        },
    };

    const responses = await Promise.all([fetch(beerUrl, options), fetch(questionUrl, options)]);
    if (!responses[0].ok || !responses[1].ok) {
        console.error(
            'Error while getting data',
            responses.map((r) => r.status)
        );
        return { beers: [], questions: [] };
    }

    const results = await Promise.all([responses[0].json(), responses[1].json()]);

    return { beers: results[0], questions: results[1] };
};

export default async function MenuPage() {
    const { questions, beers } = await getData();

    return (
        <PageWrapper>
            <Header title='Arbre de choix' />
            {questions.length > 0 && beers.length > 0 ? (
                <QuestionComponent beers={beers} questions={questions} />
            ) : (
                <p>Aucunée donnée</p>
            )}
            <FooterMenu menuActive={3} />
        </PageWrapper>
    );
}

export const revalidate = 10; // 10 seconds --> to change after tests
