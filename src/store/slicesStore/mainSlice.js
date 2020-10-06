// Libs
import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Отправка запроса
export const responseDataWork = createAsyncThunk('mainSliceBlock/responseDataWorkStatus',
    async (inputValue) => {
        const response = await axios.get('http://localhost:9999/', {
            params: {
                input: inputValue,
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        })
        return response.data.map( (el) => ({...el, favorite: false}) );
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

export const {sss, addDataStorageWorkList ,showListLocalStorage, deleteWorkInLocalStorageStore, openAndCloseModal } = mainSlice.actions;