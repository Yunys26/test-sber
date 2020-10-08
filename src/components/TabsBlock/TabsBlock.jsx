import React, { useState } from 'react';
// Libs
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import {
    Tabs,
    Tab,
    Paper,
    ThemeProvider,
    Typography
} from '@material-ui/core';
// Theme
import { themeTabs, useTabsBlockStyle } from './tabsBlockTheme';
// Store action
import { showListLocalStorage } from '../../store/slicesStore/mainSlice';
// Components
import ListWork from '../List/ListWork';
import ModalS from '../Modal/Modal';
import ListFavorite from '../List/ListFavorite';
import { showLocalStorage } from '../../store/slicesStore/middleWareMainSlice';
    

export default function TabsBlock(props) {
    
    // Стили
    const classes = useTabsBlockStyle();

    const { setInputValue } = props;

    const modalStateStore = useSelector(state => state.main.modalState);

    const data = useSelector(state => state.main.dataResponse);

    const dispatch = useDispatch();

    const [valueIndexOne, setValueIndexOne] = useState(0);

    // Логика работы Tabs
    const tabsIndexOne = () => {
        (valueIndexOne === 0 && setValueIndexOne(1)) || (valueIndexOne === 1 && setValueIndexOne(0));
    };

    return (
        <>
            <Paper className={classes.paperTabs} square>
                <Tabs
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                    onClick={() => tabsIndexOne()}
                    value={valueIndexOne}
                >
                    <ThemeProvider theme={themeTabs}>
                        <NavLink className={classes.tabNavLink} to="/">
                            <Tab label="Work" value={0}/>
                        </NavLink>
                    </ThemeProvider>
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
            <Route exact path="/">
                {data.length === 1 && data.map( (el) => <Typography className={classes.statusLoadingText} variant="h2" align="center">{el.status}</Typography>) ||
                    <ListWork
                        classes={classes}
                        data={data}
                        statusList={<Typography variant="h4" align="center">Work list is empty</Typography>}
                    />
                }
            </Route>
            <Route path="/work">
                {data.length === 1 && data.map( (el) => <Typography className={classes.statusLoadingText} variant="h2" align="center">{el.status}</Typography>) ||
                    <ListFavorite
                        classes={classes}
                        statusListFavorit={<Typography variant="h4" align="center">Work favorites list is empty</Typography>}
                    />
                }
            </Route>
            
            {modalStateStore && <ModalS open={modalStateStore} />}
        </>
    )
}

TabsBlock.propTypes = {
    setInputValue: PropTypes.func,
}