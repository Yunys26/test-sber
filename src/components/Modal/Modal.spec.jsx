import React from 'react';
import { shallow } from 'enzyme';
import ModalS from './Modal';
import { Button } from '@material-ui/core';

// Мокаем useDispatch
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}));

describe('<Modal />', () => {

    let props, componentModal; 

    beforeEach(() => {

        props = {
            open: true,
        };

        componentModal = shallow(<ModalS {...props} />)
    });

    afterEach(() => {
        props, componentModal = undefined
        
    })

    describe('Содержимое <Modal /> ', () => {

        it("Snapshot Modal", () => {
            expect(componentModal).toMatchSnapshot();
        });

        it("Проверка на рендер компонента", () => {
            expect(componentModal.length).toBe(1);
        });

        it('Проверка состояния моадльного окна', () => {
            expect(componentModal.props().open).toEqual(true)
        });
    
        it('Проверка на кол-во обязательных кнопок', () => {
            expect(componentModal.find(Button)).toHaveLength(2);
        });
        
        it('Проверка текста в кнопке 1',() => {
            expect(componentModal.find(Button).at(0).text()).toEqual('Ок');
        });

        it('Проверка текста в кнопке 2' ,() => {
            expect(componentModal.find(Button).at(1).text()).toEqual('Удалить все избранное');
        });
    
        it('Проверка на наличие заголовока', () => {
            expect(componentModal.find("h2")).toHaveLength(1);
        });

    });

    describe('Логика <Modal />', () => {

        it('Закрытие модального окна при нажатии на кнопку Ок', () => {
            const buttotOk = componentModal.find(Button).at(0);
            buttotOk.simulate('click', { ...props, open: false});2
        });

        it('Закрытие модального окна при нажатии на кнопку Удалить все избранное', () => {
            const buttotOk = componentModal.find(Button).at(0);
            buttotOk.simulate('click', localStorage.clear());
        });
        
    });

});
