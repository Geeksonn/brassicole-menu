export type EditionDate = {
    month: number;
    year: number;
};

export type Edition = {
    _id: string;
    active: boolean;
    date: EditionDate;
    name: string;
};

export type Beers = {
    _id: string;
    name: string;
    type: string;
    brewery: string;
    degree: number;
    ibu: number;
    image: string;
    price: number;
    currency: string;
    description: string;
    edition: string;
};

export type RoutesElement = {
    order: number;
    name: string;
};

export type Routes = {
    _id: string;
    name: string;
    beers: RoutesElement[];
    edition: string;
};

export type QuestionResult = {
    nextQuestion: number;
    selectedBeer: string;
};

export type Questions = {
    _id: string;
    qid: number;
    question: string;
    option1: string;
    resultOption1: QuestionResult;
    option2: string;
    resultOption2: QuestionResult;
    edition: string;
};
