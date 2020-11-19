import { deleteWorkInLocalStorageStore, openAndCloseModal, showListLocalStorage } from './mainSlice';

const localDataOne = {
    company: "NS",
    company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUdMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9413d6855d50ab98787e3589f63491eacd6c7e0b/NS%20CB.jpg",
    company_url: "http://www.ns.nl",
    created_at: "Tue Oct 13 10:25:20 UTC 2020",
    description: "senior iOS developer NS App - Utrecht Utrecht",
    favorite: false,
    how_to_apply: "Solliciteer direct via de",
    id: "65197190-0116-414a-9406-ae150edccb57",
    location: "Utrecht",
    title: "senior iOS developer NS App ",
    type: "Full Time",
    url: "https://jobs.github.com/positions/65197190-0116-414a-9406-ae150edccb57",
};

const localDataTwo = {
    company: "Redbrick",
    company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bfcf8205463e2bed0526f9ae61be3cd93d70e210/rdbrck-wordmark.png",
    company_url: "https://rdbrck.com/",
    created_at: "Thu Oct 08 20:48:37 UTC 2020",
    description: "Redbrick is the parent organization of a portfolio of disruptive digital companies.",
    favorite: false,
    how_to_apply: "Please apply to the job link here",
    id: "aaa7101b-6d63-4887-9e0c-1f2989c3cb36",
    location: "Victoria, BC, Canada",
    title: "Senior Application Developer",
    type: "Full Time",
    url: "https://jobs.github.com/positions/aaa7101b-6d63-4887-9e0c-1f2989c3cb36",
};

const initialState = {
    dataResponse: [],
    localStorageStore: [
        {
            id: "65197190-0116-414a-9406-ae150edccb57",
            data: localDataOne
        },
        {
            id: "aaa7101b-6d63-4887-9e0c-1f2989c3cb36",
            data: localDataTwo
        }
    ],
    modalState: false,
}

describe('Тестирование Redusers', () => {
    
    it('Reduser showListLocalStorage', () => {
        const action = showListLocalStorage([localDataOne, localDataTwo]);
        expect({...initialState, dataResponse: action.payload}).toEqual({...initialState, dataResponse: action.payload})
    });

    it('Reduser deleteWorkInLocalStorageStore', () => {
        const [ arr ] = initialState.localStorageStore
        const  newLocalStore = {...arr};
        delete newLocalStore[localDataTwo.id];
        const action = deleteWorkInLocalStorageStore(newLocalStore)
        expect({...initialState, localStorageStore: action.payload}).toEqual({...initialState, localStorageStore: { id:localDataOne.id, data: localDataOne}});
    });
    
    it('Reduser openAndCloseModal', () => {
        const action = openAndCloseModal(true);
        expect({...initialState, modalState: action.payload}).toEqual({...initialState, modalState: true});
    });
})