// Actions - functions that are used to update state

// Increment action
export function increment() {
    return {type: 'INCREMENT'};
}

// Decrement action
export function decrement() {
    return {type: 'DECREMENT'};
}

// Reducer - function to read in an action and update state
// based on that action
//
// Handle increment and decrement of the counter
// ... and store the counter state
export default function reducer(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// const store = createStore(reducer);
// console.log(store);
// console.log(store.getState());
// store.dispatch(increment());
// console.log(store.getState());

// reducer(0, increment()) => 1
// reducer(0, decrement()) => -1
// reducer(0, {type: 'INVALID'}) => 0