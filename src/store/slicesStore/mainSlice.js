// Libs
import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { responseDataWork } from './middleWareMainSlice';

// Создане ветви хранилища
const mainSlice = createSlice({
    // Название слоя
    name: 'mainSliceBlock',
    // Дефолтное состояние
    initialState: {
        dataResponse: [],
        localStorageStore: [],
        modalState: false,
    },
    // Обновление состояний
    reducers: {
        showListLocalStorage: (state, action) => {
            state.localStorageStore = action.payload;
            console.log(state.localStorageStore)
        },
        deleteWorkInLocalStorageStore: (state, action) => {
            state.localStorageStore = action.payload;
        },
        openAndCloseModal: (state, action) => {
            state.modalState = action.payload;
        },
    },
    // Обновление внешних экшенов
    extraReducers: {
        [responseDataWork.fulfilled]: (state, aciton) => {
            state.dataResponse = aciton.payload;
            console.log("Load");
            console.log(aciton.payload);
        },
        [responseDataWork.pending]: (state) => {
            state.dataResponse = [{status: 'Loading...'}];
            console.log('Pending');
        },
        [responseDataWork.rejected]: (state) => {
            state.dataResponse = [{status: 'Error'}];
            console.log("Failed");
        }
    },
});

export default mainSlice.reducer;

export const { showListLocalStorage, deleteWorkInLocalStorageStore, openAndCloseModal } = mainSlice.actions;