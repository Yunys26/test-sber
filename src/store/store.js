// Libs
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainSlice from './slicesStore/mainSlice';

// Создание главного редьюсера
const rootReducer = combineReducers({
    main: mainSlice,
});

// Настройка хранилища
const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

// Хранилище
export const store = configureStore({
    reducer: rootReducer,
    middleware,
});
