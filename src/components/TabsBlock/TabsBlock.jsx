import React, { useState } from 'react';
// Libs
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
    Tabs,
    Tab,
    Paper,
    Typography
} from '@material-ui/core';
// Theme
import { useTabsBlockStyle } from './tabsBlockTheme';
// Store action
import { showListLocalStorage } from '../../store/slicesStore/mainSlice';
// Components
import ListWork from '../List/ListWork';
import ModalS from '../Modal/Modal';
import ListFavorite from '../List/ListFavorite';

import { showLocalStorage } from '../../store/slicesStore/middleWareMainSlice';
    

export default function TabsBlock({ setInputValue }) {

    // Стили
    const classes = useTabsBlockStyle();

    const modalStateStore = useSelector(state => state.main.modalState);

    const data = useSelector(state => state.main.dataResponse);

    const local = useSelector(state => state.main.localStorageStore);

    const dispatch = useDispatch();

    const [valueIndexOne, setValueIndexOne] = useState(0);

    // Логика работы Tabs
    const tabsIndexOne = () => {
        (valueIndexOne === 0 && setValueIndexOne(1)) || (valueIndexOne === 1 && setValueIndexOne(0));
    };

    return (
        <div>
            <Paper className={classes.paperTabs} square>
                <Tabs
                    centered
                    onClick={() => tabsIndexOne()}
                    value={valueIndexOne}
                >
                    <NavLink className={classes.tabNavLink} to="/">
                        <Tab  label="Work" value={0}/>
                    </NavLink>
                    <NavLink 
                        onClick={() => {
                            dispatch(showListLocalStorage(showLocalStorage()));
                            setInputValue('');
                        }}
                        className={classes.tabNavLink} to="/work"
                    >
                        <Tab label="Work Favorites" value={1}/>
                    </NavLink>
                </Tabs>
            </Paper>
            <Switch>
                <Route exact path="/">
                    { (data.length === 1 && data.map( (el) => <Typography className={classes.statusLoadingText} variant="h2" align="center" key={0}>{el.status}</Typography>)) ||
                        <ListWork
                            classes={classes}
                            data={data}
                            statusList={<Typography variant="h4" align="center">Work list is empty</Typography>}
                            local={local}
                        />
                    }
                </Route>
                <Route path="/work">
                    { (data.length === 1 && data.map( (el) => <Typography className={classes.statusLoadingText} variant="h2" align="center" key={1}>{el.status}</Typography>)) ||
                        <ListFavorite
                            classes={classes}
                            statusListFavorit={<Typography variant="h4" align="center">Work favorites list is empty</Typography>}
                            local={local}
                        />
                    }
                </Route>
            </Switch>
            
            {modalStateStore && <ModalS open={modalStateStore} />}
        </div>
    )
}

TabsBlock.propTypes = {
    setInputValue: PropTypes.func,
}