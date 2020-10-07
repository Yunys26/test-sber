import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Отправка запроса
export const responseDataWork = createAsyncThunk('mainSliceBlock/responseDataWorkStatus',
    async (inputValue) => {
        const response = await axios.get('http://localhost:9999/', {
            params: {
                input: inputValue,
            }
        })
            .then(res => {
                const result = res.data.map( (el) => (
                    {
                        id: el.id,
                        dataDescription: {...el, favorite: false},
                    }))
                return result;
            })
            .catch(err => {
                console.log(err);
            })
        return response;
    }
);

export const addAndDelLocal = (id, index, data, local) => {
    const result = {
        [id]: {...data[index].dataDescription, favorite: true}, 
        ...local,
    }
    localStorage.setItem('local', JSON.stringify(result))
    return result;
}

export const asd = (id, data) => {
    let ds = null;
    for (let i = 0; i < data.length; i++) {
        if (id === data[i].id) {
            // должны переприсвоить эти данные и обновить хранилище работы
        }
    }
}