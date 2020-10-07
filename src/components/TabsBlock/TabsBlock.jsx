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
import { showListLocalStorage, deleteWorkInLocalStorageStore } from '../../store/slicesStore/mainSlice';
// Components
import ListWork from '../List/ListWork';
import ModalS from '../Modal/Modal';
import ListFavorite from '../List/ListFavorite';
    

export default function TabsBlock(props) {

    const { inputValue, setInputValue } = props;

    const favoritesWorkList = useSelector(state => state.main.localStorageStore);

    const modalStateStore = useSelector(state => state.main.modalState);

    const data = useSelector(state => state.main.dataResponse);

    const classes = useTabsBlockStyle();

    const dispatch = useDispatch();

    const [valueIndexOne, setValueIndexOne] = useState(0);
    console.log(data)
    // Добавление/Удаление в избранное в tab work
    const addAndDelInFavorite = (index) => {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === `${inputValue}?${index}`) {
                return localStorage.removeItem(localStorage.key(i));
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
    };

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
                        funcLogic={addAndDelInFavorite}
                        statusList={<Typography variant="h4" align="center">Work list is empty</Typography>}
                    />
                }
            </Route>
            <Route path="/work">
                {data.length === 1 && data.map( (el) => <Typography className={classes.statusLoadingText} variant="h2" align="center">{el.status}</Typography>) ||
                    <ListFavorite
                        classes={classes}
                        data={favoritesWorkList}
                        funcLogic={deleteStoreAndLocalStorage}
                        statusListFavorit={<Typography variant="h4" align="center">Work favorites list is empty</Typography>}
                    />
                }
            </Route>
            
            {modalStateStore && <ModalS open={modalStateStore} />}
        </>
    )
}

TabsBlock.propTypes = {
    inputValue: PropTypes.string,
    setInputValue: PropTypes.func,
}