import React from 'react';
import { mount, shallow } from 'enzyme';
import ModalS from './Modal';

describe('<Modal />', () => {

    let props, componentModal; 

    beforeEach(() => {

        props = {
            open: true,
        };

        componentModal = shallow(<ModalS {...props} />)
    });

    describe('Содержимое <Modal /> ', () => {

        it("Проверка на рендер компонента", () => {
            expect(componentModal.length).toBe(1);
        });

        it('Проверка состояния моадльного окна', () => {
            expect(componentModal.props().open).toEqual(true)
        });
    
        it('Проверка на кол-во обязательных кнопок', () => {
            expect(componentModal.find("button")).toHaveLength(2);
        });
        
        it('Проверка текста в кнопках',() => {
            expect(componentModal.find("button").at(0).text()).toEqual('Ок');
            expect(componentModal.find("button").at(1).text()).toEqual('Удалить все избранное');
        });
    
        it('Проверка на наличие заголовока', () => {
            expect(componentModal.find("h2")).toHaveLength(1);
        });

    });

    // describe('Логика <Modal />', () => {
    //     it('Закрытие модального окна', () => {
    //         const buttotOk = componentModal.find('button').at(0);
    //         buttotOk.simulate('click');
    //     });
    // });

});
