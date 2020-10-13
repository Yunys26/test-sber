import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import ListWork from './ListWork';


// Мокаем useDispatch
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn()
}));

describe('<ListWork />', () => {
    let props, componentListWork, useEffect;

    beforeEach(() => {

        props = {
            classes: {},
            data: [
                {
                    id: "65197190-0116-414a-9406-ae150edccb57",
                    dataDescription: {}
                }
            ],
            statusList: {},
            local: [{}]
        };
        // [{
        //     id: "65197190-0116-414a-9406-ae150edccb57",
        //     dataDescription: {

        //     }
        // }],

        // useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

        componentListWork = shallow(<ListWork {...props} />)
    });

    afterEach(() => {
        props, componentListWork = undefined;
    });

    it('Проверка на рендер <ListWork />', () => {
        expect(componentListWork.length).toBe(1);
    });

    it('123', () => {
        console.log(componentListWork.props().data)
    })
})