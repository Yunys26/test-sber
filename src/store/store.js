// Хранилище
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mainReducer from '../features/mainSlice/mainSlice';

const middleware = getDefaultMiddleware({
    // immutableCheck: false,
    // serializableCheck: false,
    thunk: true,
});

export default configureStore({
    // reducer: { ...reducers }
    reducer: {
        data: mainReducer,
    },

    middleware,
})