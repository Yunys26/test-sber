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
            console.log(res.data);
            return res;
        })
        .catch(err => {
            console.log(err);
        })
        return response.data;
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
            console.log("Load")
            state.dataResponse = aciton.payload;
        },
        [responseDataWork.pending]: (state) => {
            state.dataResponse = [{
                company: 'Loading...',
                company_logo: null,
                company_url: 'Loading...',
                // created_at: 'Loading...',
                description: 'Loading...',
                hot_to_apply: 'Loading...',
                location: 'Loading...',
                title: 'Loading...',
                type: 'Loading...',
            }];
            console.log("Pending")
        }
    },
});

export default mainSlice.reducer;

export const { showListLocalStorage, deleteWorkInLocalStorageStore, openAndCloseModal } = mainSlice.actions;