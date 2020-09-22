import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const mainSlice = createSlice({
    name: 'Main',
    initialState: {
        data: null,
    },
    reducers: {
        getData: (state, action) => {
            axios.get(`https://jobs.github.com/positions.json?search=${action.payload}`)
                .then(res => console.log(JSON.parse(res)))
                .catch(err => console.log(err))
        },
        // showData: () => {
        //     return <p>123</p>
        // }

    },
});

export const { getData, showData } = mainSlice.actions;

// export const dataGet = dataWork => dispatch => {
//     dispatch(data(dataWork));
// }

export default mainSlice.reducer;