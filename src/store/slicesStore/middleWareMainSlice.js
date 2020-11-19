
import { openAndCloseModal, showListLocalStorage } from "./mainSlice";

export const addAndDelLocal = (id, index, data, local) => {
    const result = {
        [id]: {...data[index].dataDescription, favorite: true}, 
        ...local,
    }
    localStorage.setItem('local', JSON.stringify(result))
    return result;
}

// Копирование localStorage в массив для хранения в хранилище 
export const showLocalStorage = () => {
    let arrayLocalStorage = [];
    if (localStorage.length !== 0) {
            arrayLocalStorage.push(JSON.parse(localStorage.getItem('local')));
    }
    return arrayLocalStorage;
};

export const updateLocalStorageAndStoreFavorit = (id, local) => {
    const [ arr ] = local
    const  newLocalStore = {...arr};
    delete newLocalStore[id];
    localStorage.setItem('local', JSON.stringify(newLocalStore))
    return JSON.stringify(newLocalStore)
};

export const updateEffectLocalStorageStore = (local, dispatch) => {
    if (localStorage.length !== 0) {
        dispatch(showListLocalStorage(JSON.parse(localStorage.getItem('local'))))
        return () => {
            localStorage.getItem('local', JSON.stringify(local));
        }
    } else if (localStorage.length >= 20) {
        dispatch(openAndCloseModal(true))
    }
}