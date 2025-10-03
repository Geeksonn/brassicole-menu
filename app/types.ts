import { CompositeTypes, Tables } from './lib/database.types';

export type Beer = Tables<'beers'>;
export type Route = Tables<'routes'>;
export type RouteBeers = CompositeTypes<'route_menu_item'>;

type BeerDegree = {
    integer: number;
    decimal: number;
};

export type RouteWithBeers = {
    routes: Route[];
    routeBeers: RouteBeers[];
};

export type Options = {
    id: string;
    option: string;
    next_question: number;
    selected_beer: string;
    selected_beer_id: string | null;
};

export type QuestionsAndOptions = {
    id: string;
    qid: number;
    question: string;
    editions: { name: string }[];
    options: Options[];
};

export type QuestionOption = {
    selectedBeer: Beer;
    nextQuestion: number;
    option: string;
    selectedBeerId: string;
};

export type Question = {
    _id: string;
    options: QuestionOption[];
    qid: number;
    question: string;
    edition: string;
};

export type Edition = {
    _id: string;
    name: string;
    date: {
        year: number;
        month: number;
    };
    active: boolean;
    number: number;
};
