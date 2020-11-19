import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import { Button, Input } from '@material-ui/core';
import TabsBlock from '../TabsBlock/TabsBlock';


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
//   useSelector: () => jest.fn()
}));

describe('<Main />', () => {
    
    let componentMain = shallow(<Main />)

    afterEach( () => {
        jest.clearAllMocks();
    })

    it("Snapshot Main", () => {
        expect(componentMain).toMatchSnapshot();
    });

    it("Проверка на рендер компонента", () => {
        expect(componentMain.length).toBe(1);
    });

    it("Проверка на наличие Input", () => {
        expect(componentMain.find(Input)).toHaveLength(1);
    });

    it("Логика Input", () => {
        const input = componentMain.find(Input);
        input.simulate('onChange', {target: { value: 'java'}});
    });

    it('Проверка на наличии кнопки', () => {
        expect(componentMain.find(Button)).toHaveLength(1)
    });

    it('Проверка на наличиt текста', () => {
        expect(componentMain.find(Button).at(0).text()).toEqual('Search Work');
    });

    it('Проверка на наличие <TabsBlock />', () => {
        expect(componentMain.find(TabsBlock)).toHaveLength(1);
    });

});
