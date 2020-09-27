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
        .catch(err => console.log(err))
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
    },
    // Обновление состояний
    reducers: {
        
    },
    // Обновление внешних экшенов
    extraReducers: {
        [responseDataWork.fulfilled]: (state, aciton) => {
            state.dataResponse = aciton.payload;
        }
    },
});

export default mainSlice.reducer;

// export const { } = mainSlice.actions;