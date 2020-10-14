import React, { useEffect } from 'react';
import { mount, shallow } from 'enzyme';
import ListFavorite from './ListFavorite';
import { Button } from '@material-ui/core';

// Мокаем useDispatch
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn()
}));


describe('<ListFavorite />', () => {
    let props, componentListFavorite;

    beforeEach(() => {

        props = {
            classes: {},
            statusList: {},
            local: [
                {
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
                },
            ],
        };

        componentListFavorite = shallow(<ListFavorite {...props} />)
    });

    afterEach(() => {
        props, componentListFavorite = undefined;
    });

    it('Проверка на рендер <ListFavorite />', () => {
        expect(componentListFavorite.length).toBe(1);
    });

    it('Snapshot ListFavorite', () => {
        expect(componentListFavorite).toMatchSnapshot();
    });
}) 