import { BSON } from 'mongodb';
import client from './mongodb';
import { Edition, Question } from '@/types';

export const getQuestions = async () => {
    const db = client.db('db');
    const questionsCollection = db.collection('questions');
    const editionCollection = db.collection('editions');
    const beerCollection = db.collection('beers');

    const edition = await editionCollection.findOne<Edition>({ active: true });
    if (!edition) throw new Error('No active edition');

    const questions = await questionsCollection
        .find<Question>({ edition: edition.name })
        .sort({ qid: 1 })
        .toArray();
    if (!questions) return [];

    const questionsAndBeers = [];
    for (const question of questions) {
        const newOptions = [];
        for (const opt of question.options) {
            if (opt.selectedBeerId !== '') {
                const beer = await beerCollection.findOne({ _id: new BSON.ObjectId(opt.selectedBeerId) });
                newOptions.push({
                    ...opt,
                    selectedBeer: beer,
                });
            } else {
                newOptions.push(opt);
            }
        }

        questionsAndBeers.push({
            ...question,
            options: newOptions,
        });
    }
    
    return JSON.parse(JSON.stringify(questionsAndBeers));
};
