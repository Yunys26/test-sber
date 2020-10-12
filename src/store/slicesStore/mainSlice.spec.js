import React from 'react';
import { mount } from 'enzyme';
import { openAndCloseModal, showListLocalStorage } from './mainSlice';


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

const stateModal = {
    "payload": true,
    "type": "mainSliceBlock/openAndCloseModal",
}


describe('Тестирование Redusers', () => {
    
    // it('Reduser showListLocalStorage', () => {
    //     expect(showListLocalStorage)
    // });

    // it('Reduser deleteWorkInLocalStorageStore', () => {

    // });
    
    it('Reduser openAndCloseModal', () => {
        // expect(initialState.modalState).toEqual(initialState.modalState)
        // expect(openAndCloseModal(true)).toEqual({...initialState, modalState: true, ...stateModal});
    });
})