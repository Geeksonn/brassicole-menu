type BeerDegree = {
    integer: number;
    decimal: number;
};

export type Beer = {
    _id: string;
    name: string;
    type: string;
    container: string;
    brewery: string;
    degree: BeerDegree;
    ibu: number;
    image: string;
    imageCard: string;
    price: number;
    currency: string;
    description: string;
    edition: string;
};

export type RouteBeer = {
    _id: string;
    order: number;
    name: string;
    type: string;
    ibu: number;
    degree: BeerDegree;
};

export type Route = {
    _id: string;
    name: string;
    beers: RouteBeer[];
    edition: string;
};

export type QuestionOption = {
    selectedBeer: string;
    nextQuestion: number;
    option: string;
    selectedBeerId: string;
}

export type Question = {
    _id: string;
    options: QuestionOption[];
    qid: number;
    question: string;
    edition: string;
}