import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Оотправка запроса
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
        .catch(err => console.log(err))
        return response.data;
    }
);

const mainSlice = createSlice({
    // Название слоя
    name: 'mainSliceBlock',
    // Дефолтное состояние
    initialState: {
        dataResponse: [],
    },
    // Обновление состояний
    reducers: {

    },
    // Обновление внешних экшенов
    extraReducers: {
        [responseDataWork.fulfilled]: (state, aciton) => {
            state.dataResponse.push(aciton.payload);
        }
    },
});


export default mainSlice.reducer;
export const { getData, clickIncrement} = mainSlice.actions;