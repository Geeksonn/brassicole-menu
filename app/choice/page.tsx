import FooterMenu from '@/_ui/footerMenu';
import Header from '@/_ui/header';
import PageWrapper from '@/_ui/pageWrapper';
import QuestionComponent from '@/_ui/question/questionComponent';
import { getBeers, getQuestionsNew } from '@/lib/queries';
import { createClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function MenuPage() {
    const supabase = await createClient();
    const [questions, beers] = await Promise.all([getQuestionsNew(supabase), getBeers(supabase)]);

    return (
        <PageWrapper>
            <Header title='Arbre de choix' />
            {questions.length > 0 ? (
                <QuestionComponent questions={questions} beers={beers} />
            ) : (
                <p>Aucunée donnée</p>
            )}
            <FooterMenu menuActive={3} />
        </PageWrapper>
    );
}
