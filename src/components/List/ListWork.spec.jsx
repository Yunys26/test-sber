import React from 'react';
import { shallow } from 'enzyme';
import ListWork from './ListWork';


// Мокаем useDispatch
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn()
}));

describe('<ListWork />', () => {
    let props, componentListWork;

    beforeEach(() => {

        props = {
            classes: {},
            data: [
                {
                    id: "65197190-0116-414a-9406-ae150edccb57",
                    dataDescription: {
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
                }
            ],
            statusList: {},
            local: [{}]
        };

        componentListWork = shallow(<ListWork {...props} />)
    });

    afterEach(() => {
        props, componentListWork = undefined;
    });

    it('Проверка на рендер <ListWork />', () => {
        expect(componentListWork.length).toBe(1);
    });
    
    it('Snapshot ListWork', () => {
        expect(componentListWork).toMatchSnapshot();
    });

})