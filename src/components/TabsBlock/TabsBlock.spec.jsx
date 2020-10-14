import React from 'react';
import { shallow } from 'enzyme';
import TabsBlock from './TabsBlock';
import { NavLink } from 'react-router-dom';
import { Tabs } from '@material-ui/core';

// Мокаем useDispatch
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: () => jest.fn(),
}));

describe('<TabsBlock />', () => {
    let props, componentTabsBlock;

    beforeEach(() => {

        props = {
            data: [],
            setInputValue: (state) => state
        }

        componentTabsBlock = shallow(<TabsBlock {...props} />)

    })

    it('Проверка на рендер компонента', () => {
        expect(componentTabsBlock.length).toBe(1);
    });

    it('Snapshot TabsBlock', () => {
        expect(componentTabsBlock).toMatchSnapshot();
    });

    it('Проверяем кол-во NavLink', () => {
        expect(componentTabsBlock.find(NavLink)).toHaveLength(2);
    })

    it('Проверка клика на 2-ой NavLink', () => {
        const NavLinkFavorite = componentTabsBlock.find(NavLink).at(1);
        NavLinkFavorite.simulate('click', props.setInputValue(''));
    });

    it('Проврка на наличие Tabs', () => {
        expect(componentTabsBlock.find(Tabs)).toHaveLength(1);
    });

    it('Проверка клика Tabs', () => {
        const TabsClick = componentTabsBlock.find(Tabs);
        TabsClick.simulate('click', () => {})
    });

});