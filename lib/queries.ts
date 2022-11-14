const LIST_ITEMS = `
query ListItems ($query: ItemQueryInput, $sort: ItemSortByInput) {
    items(query: $query, sortBy: $sort) {
        _id
        name
        type
        brewery
        degree
        ibu
        image
        imageCard
        price
        currency
        description
        edition
    }
}
`;

const LIST_ROUTES = `
query ListRoutes ($query: RouteQueryInput, $sort: RouteSortByInput){
    routes(query: $query, sortBy: $sort) {
        _id
        name
        beers {
            order
            name
        }
        edition
    }
}
`;

const LIST_QUESTIONS = `
query ListQuestions($query: QuestionQueryInput, $sort: QuestionSortByInput) {
    questions(query: $query, sortBy: $sort) {
        _id
        qid
        question
        options {
            option
            nextQuestion
            selectedBeer
        }
        edition
    }
}
`;

const GET_EDITION = `
query GetEdition ($query: EditionQueryInput) {
    edition(query: $query) {
        _id
        active
        date {
            month
            year
        }
        name
    }
}
`;

export { LIST_ITEMS, LIST_ROUTES, LIST_QUESTIONS, GET_EDITION }