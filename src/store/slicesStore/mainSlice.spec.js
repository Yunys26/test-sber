import React from 'react';
import { mount } from 'enzyme';
import { deleteWorkInLocalStorageStore, openAndCloseModal } from './mainSlice';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataResponse: [],
    localStorageStore: [],
    modalState: false,
}

const data = [
    {id: 'dnvj123-123n!/sa['},
    {id: 'dnvj123-123n1l2213,/12-'},
    {id: 'dnvj123-123n/12n??1'},
];

const state = {
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


describe('Тестирование Redusers', () => {
    

    // it('Reduser showListLocalStorage', () => {
    //     expect(showListLocalStorage)
    // });

    it('Reduser deleteWorkInLocalStorageStore', () => {
        const action = deleteWorkInLocalStorageStore(JSON.stringify(state))
        expect({initialState})
    });
    
    it('Reduser openAndCloseModal', () => {
        const action = openAndCloseModal(true);
        expect({...initialState, modalState: action.payload}).toEqual({...initialState, modalState: true});
    });
})