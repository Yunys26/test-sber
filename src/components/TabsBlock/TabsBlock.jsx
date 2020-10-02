import React, { Children } from 'react'
// Libs
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import {
    Tabs,
    Tab,
    Paper,
    Box
} from '@material-ui/core';
// Theme
import { useTabsBlockStyle } from './tabsBlockTheme';
// Store action
import { showListLocalStorage, deleteWorkInLocalStorageStore } from '../../store/slicesStore/mainSlice';
// Components
import ListWork from '../ListWork/ListWork';



export default function TabsBlock(props) {

    const { data, inputValue } = props;

    const favoritesWorkList = useSelector(state => state.main.localStorageStore);

    const classes = useTabsBlockStyle();

    const dispatch = useDispatch();

    // Добавление/Удаление в избранное
    const addAndDelInFavorite = (index) => {

        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === `${inputValue}?${index}`) {
                localStorage.removeItem(localStorage.key(i));
                return alert("Удалено из избранного");
            }
        }
        localStorage.setItem(`${inputValue}?${index}`, JSON.stringify(data[index]));
        alert('Добавлено в избранное');
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
                    <NavLink className={classes.tabNavLink} to="/">
                        <Tab label="Work" value={0} />
                    </NavLink>

                    <NavLink onClick={() => dispatch(showListLocalStorage(showLocalStorage()))} className={classes.tabNavLink} to="/work">
                        <Tab label="Work Favorites" value={1} />
                    </NavLink>
                </Tabs>
            </Paper>
            <Route exact path="/">
                <ListWork
                    classes={classes}
                    data={data}
                    funcLogic={addAndDelInFavorite}
                    statusList
                />
            </Route>
            <Route path="/work">
                <Box>
                    <ListWork
                        classes={classes}
                        data={favoritesWorkList}
                        funcLogic={deleteStoreAndLocalStorage}
                        statusList
                    />
                </Box>
            </Route>
        </>
    )
}