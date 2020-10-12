import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from './Main';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../store/store';

describe('<Main />', () => {

    let componentMain;

    beforeEach(() => {

        // const dispatch = useDispatch();

        componentMain = shallow(<Provider store={store}><Main /></Provider>)
    });

    it('Проверка рендера компонента', ()=> {
        const main = componentMain.find('Main');
        expect(main.find('button')).toHaveLength(1);
        expect(componentMain.length).toBe(1);
    });

});