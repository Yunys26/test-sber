import { createStore } from 'redux';

function data (state = 0, action) {
    switch (action.type) {
        case GETDATA:
            return state + 1;
        case LIKEWORK:
            return state - 1;
    }
}

let store = createStore(data);

store.subscribe( () => console.log(store.getState()))