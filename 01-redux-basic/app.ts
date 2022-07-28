interface Action {
    type: string;
    payload?: any;
}

const increaseAction: Action = {
    type: 'INCREASE'
};

const decreaseAction: Action = {
    type: 'DECREASE'
};

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
};

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
};

function reducer(state = 10, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return --state;
        case 'DECREASE':
            return ++state;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        default:
            return state;
    }
}

const newState = reducer(10, divideAction);
console.log(newState);
