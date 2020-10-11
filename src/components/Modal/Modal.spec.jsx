import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { shallow } from 'enzyme';
import ModalS from './Modal';
import { Provider } from 'react-redux';
import { store } from '../../store/store';



describe('<Modal />', () => {
    let props, componentModal; 

    beforeEach(() => {

        props = {
            open: false,
        };

        componentModal = shallow(<Provider store={store}><ModalS {...props}/></Provider>)
    });

    it("Проверка на рендер компонента", () => {
        expect(componentModal).toBeTruthy();
    });

    it('нажатие кнопки "Удалить все"', () => {
        componentModal.find('button').simulate('click');
        expect()
    });

    // it('нажатие кнопки "Ок"', () => {
    //     componentModal.find('button').simulate('click');
    //     expect()
    // });
        
    it('render initial', () => {
        expect(componentModal.find('button')) // .find + поиск по имени компонента
        expect(componentModal.find('h2'))
    });

});
