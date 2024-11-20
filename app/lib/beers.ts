import { BSON } from 'mongodb';
import client from './mongodb';
import { Beer } from '@/types';

export const getBeerById = async (beerId: string) => {
    const db = client.db('db');

    const beerCollection = db.collection('beers');
    const queryBeer = { _id: new BSON.ObjectId(beerId) };
    
    const beer = await beerCollection.findOne<Beer>(queryBeer);
    return await JSON.parse(JSON.stringify(beer));
};

export const getBeers = async () => {
    const db = client.db('db');

    const beerCollection = db.collection('beers');
    const editionCollection = db.collection('editions');

    const edition = await editionCollection.findOne({ active: true });
    const queryBeer = { edition: edition?.name };

    const beers = await beerCollection.find<Beer>(queryBeer).toArray();
    return await JSON.parse(JSON.stringify(beers));
};
