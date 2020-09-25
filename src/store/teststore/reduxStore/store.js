import { createStore } from 'redux';
import initialState from './initialState';
import { ACTION_1, ACTION_2, ACTION_3, ACTION_4 } from './action/types';

// Создание глобального хранилища
const store = createStore(rootReducer, initialState);

function reducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_1: return { value: action.value_1 };
        case ACTION_2: return { value: action.value_2 };
        case ACTION_3: return { value: action.value_2 };
        case ACTION_4: return { value: action.value_2 };

        default: return state;
    }
}

export default store;