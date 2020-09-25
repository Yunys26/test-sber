import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
    name: 'mainS',

    initialState: {
        data: 1,
    },

    reducers: {
        async getData (state, action)  {
            await axios.get('http://localhost:9999/', {
                params: {
                    input: action.payload,
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data.length);
                state.data = res.data
            })
            .catch(err => console.log(err))
        }
    }
});
export default mainSlice.reducer;
export const { getData } = mainSlice.actions;