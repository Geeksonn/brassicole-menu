import { Edition, Route } from '@/types';
import client from './mongodb';

export const getRoutes = async () => {
    const db = client.db('db');

    const routesCollection = db.collection('routes');
    const editionCollection = db.collection('editions');

    const edition = await editionCollection.findOne<Edition>({ active: true });
    if (!edition) throw new Error('No active editions');

    const agg = [
        //todo
        { $match: { edition: edition.name } },
        { $unwind: '$beers' },
        { $addFields: { beerID: { $toObjectId: '$beers.id' } } },
        { $lookup: { from: 'beers', localField: 'beerID', foreignField: '_id', as: 'joinedBeers' } },
        { $unwind: '$joinedBeers' },
        {
            $project: {
                name: '$name',
                edition: '$edition',
                beers: {
                    order: '$beers.order',
                    name: '$joinedBeers.name',
                    _id: '$joinedBeers._id',
                    type: '$joinedBeers.type',
                    ibu: '$joinedBeers.ibu',
                    degree: '$joinedBeers.degree',
                },
            },
        },
        { $group: { _id: { _id: '$_id', name: '$name', edition: '$edition' }, beers: { $push: '$beers' } } },
        { $project: { _id: '$_id._id', name: '$_id.name', edition: '$_id.edition', beers: '$beers' } },
         
        { $sort: { name: -1 } },
    ];

    const routes = await routesCollection.aggregate<Route>(agg).toArray();
    return await JSON.parse(JSON.stringify(routes));
};
