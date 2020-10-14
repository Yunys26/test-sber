// Libs
import { createSlice } from '@reduxjs/toolkit';
// import { responseDataWork } from './middleWareMainSlice';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const responseDataWork = createAsyncThunk('mainSliceBlock/responseDataWorkStatus',
    async (inputValue) => {
        const response = await axios.get('http://localhost:9999/', {
            params: {
                input: inputValue,
            }
        })
        const result = response.data.map( (el) => (
            {
                id: el.id,
                dataDescription: {...el, favorite: false},
            }
        ))
        return result;
    }
);

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
            // console.log(state.localStorageStore)
        },
        deleteWorkInLocalStorageStore: (state, action) => {
            state.localStorageStore = [JSON.parse(action.payload)];
            console.log(action.payload);
            console.log(state.localStorageStore);
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