import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import ListFavorite from './ListFavorite';

// Мокаем useDispatch
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn()
}));


describe('<ListFavorite />', () => {
    let props, componentListFavorite, useEffect;

    beforeEach(() => {

        props = {
            classes: {},
            data: [{}, {}],
            statusList: {},
        };

        // useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

        componentListFavorite = shallow(<ListFavorite {...props} />)
    });

    afterEach(() => {
        props, componentListFavorite = undefined;
    });

    it('Проверка на рендер <ListFavorite />', () => {
        expect(componentListFavorite.length).toBe(1);
    });
}) 