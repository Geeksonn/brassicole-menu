import * as queries from './queries';
import { REALM_GRAPHQL_ENDPOINT, generateHeaders } from './realmClient';
import * as type from './types';

const generateOptions = async (query: string, variables: Object) => {
    return {
        method: 'POST',
        headers: await generateHeaders(),
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
    };
};

const getActiveEdition = async (): Promise<type.Edition> => {
    const options = await generateOptions(queries.GET_EDITION, { query: { active: true } });
    const response = await fetch(REALM_GRAPHQL_ENDPOINT, options);
    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors);
    } else {
        return result.data.edition;
    }
};

const getBeers = async (edition: type.Edition) => {
    const options = await generateOptions(queries.LIST_ITEMS, { query: { edition: edition.name }, sort: 'NAME_ASC' });
    const response = await fetch(REALM_GRAPHQL_ENDPOINT, options);
    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors);
    } else {
        return result.data.items;
    }
};

const getRoutes = async (edition: type.Edition) => {
    const options = await generateOptions(queries.LIST_ROUTES, { query: { edition: edition.name } });
    const response = await fetch(REALM_GRAPHQL_ENDPOINT, options);
    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors);
    } else {
        return result.data.routes;
    }
};

const getQuestions = async (edition: type.Edition) => {
    const variables = {
        query: { edition: edition.name },
        sort: 'QID_ASC',
    };

    const options = await generateOptions(queries.LIST_QUESTIONS, variables);
    const response = await fetch(REALM_GRAPHQL_ENDPOINT, options);
    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors);
    } else {
        return result.data.questions;
    }
};

export { getActiveEdition, getBeers, getRoutes, getQuestions };
