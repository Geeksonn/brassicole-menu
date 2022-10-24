import * as Realm from 'realm-web';

const APP_ID = process.env.NEXT_PUBLIC_APP_ID || '';
const REALM_GRAPHQL_ENDPOINT = `https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

const app = new Realm.App({ id: APP_ID });

const generateHeaders = async () => {
    const credentials = Realm.Credentials.apiKey(process.env.NEXT_PUBLIC_API_KEY || '');

    if (!app.currentUser) {
        await app.logIn(credentials);
    }

    return {
        Authorization: 'Bearer ' + app.currentUser?.accessToken,
    };
};

export { REALM_GRAPHQL_ENDPOINT, generateHeaders };