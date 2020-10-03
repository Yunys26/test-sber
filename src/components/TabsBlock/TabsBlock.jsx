import React, { useState } from 'react';
// Libs
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import {
    Tabs,
    Tab,
    Paper,
    Box,
    ThemeProvider,
    Typography
} from '@material-ui/core';
// Theme
import { themeTabs, useTabsBlockStyle } from './tabsBlockTheme';
// Store action
import { showListLocalStorage, deleteWorkInLocalStorageStore } from '../../store/slicesStore/mainSlice';
// Components
import ListWork from '../ListWork/ListWork';
import ModalS from '../Modal/Modal';



export default function TabsBlock(props) {

    const { data, inputValue, setInputValue } = props;

    const favoritesWorkList = useSelector(state => state.main.localStorageStore);

    const modalStateStore = useSelector(state => state.main.modalState)

    const classes = useTabsBlockStyle();

    const dispatch = useDispatch();

    // Добавление/Удаление в избранное в tab work
    const addAndDelInFavorite = (index) => {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === `${inputValue}?${index}`) {
                localStorage.removeItem(localStorage.key(i));
            }
        }
        localStorage.setItem(`${inputValue}?${index}`, JSON.stringify(data[index]));
    };

    // Копирование localStorage в массив для хранения в хранилище 
    const showLocalStorage = () => {
        let arrayLocalStorage = [];
        if (localStorage.length !== 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arrayLocalStorage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arrayLocalStorage;
    };
    // Удаление из localStorage и хранилища 
    const deleteStoreAndLocalStorage = (index) => {
        localStorage.removeItem(localStorage.key(index));
        dispatch(deleteWorkInLocalStorageStore(favoritesWorkList.filter(data => data.id !== favoritesWorkList[index].id)));
    }

    return (
        <>
            <Paper className={classes.paperTabs} square>
                <Tabs
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    <ThemeProvider theme={themeTabs}>
                        <NavLink className={classes.tabNavLink} to="/">
                            <Tab label="Work" value={0} />
                        </NavLink>

                        <NavLink 
                            onClick={() => {
                                dispatch(showListLocalStorage(showLocalStorage()));
                                setInputValue('');
                            }} 
                            className={classes.tabNavLink} to="/work">
                            <Tab label="Work Favorites" value={1} />
                        </NavLink>
                    </ThemeProvider>

                </Tabs>
            </Paper>
            <Route exact path="/">
                <ListWork
                    classes={classes}
                    data={data}
                    funcLogic={addAndDelInFavorite}
                    statusList={<Typography variant="h4" align="center">Work list is empty</Typography>}
                // {data.length !== 0 && <span>по данному запросу {inputValue}</span>}
                />
            </Route>
            <Route path="/work">
                    <ListWork
                        classes={classes}
                        data={favoritesWorkList}
                        funcLogic={deleteStoreAndLocalStorage}
                        statusListFavorit={<Typography variant="h4" align="center">Work favorites list is empty</Typography>}
                    />
            </Route>
            {modalStateStore && <ModalS open={modalStateStore} />}
        </>
    )
}