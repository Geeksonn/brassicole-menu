const defaultBeer = {
    _id: '',
    name: '',
    type: '',
    brewery: '',
    degree: 0,
    ibu: 0,
    image: '',
    imageCard: '',
    price: 0,
    currency: '',
    description: '',
    edition: '',
};

const defaultRoute = {
    _id: '',
    name: '',
    beers: {
        order: 0,
        name: '',
    },
    edition: '',
};

const defaultQuestion = {
    _id: '',
    qid: 0,
    question: '',
    option1: '',
    options: [{
        option: '',
        nextQuestion: 0,
        selectedBeer: '',
    }],
    edition: '',
};

export { defaultBeer, defaultRoute, defaultQuestion };
