import React, { useState } from 'react';
// Libs
import { Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Button,
    Typography,
    Grid,
    Input,
    ThemeProvider,
    CssBaseline,
} from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// SLice Store
import { responseDataWork } from '../../store/slicesStore/mainSlice';
// Theme
import { themeSearchBlock, useSearchBlockStyles } from './mainBlockTheme';
// Components
import TabsBlock from '../TabsBlock/TabsBlock';


function Main(props) {
    // Hooks
    const data = useSelector(state => state.main.dataResponse);

    const dispatch = useDispatch();

    const classes = useSearchBlockStyles();

    const [inputValue, setInputValue] = useState('');

    return (
            <Box className={classes.mainBlock} boxShadow={4}>
                <Typography variant="h1" align="center">Work<b>I<span className={classes.textN}>n</span></b>Search</Typography>
                <Grid className={classes.searchBlock} container item={true} direction="row" justify="center" alignItems="center" xs={12}>
                    <ThemeProvider theme={themeSearchBlock}>
                        <CssBaseline />
                        <Input className="" color="secondary" autoFocus={true} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter" />
                    </ThemeProvider>
                    <Button
                        className={classes.serachButton}
                        onClick={
                            () => (inputValue === '') ?
                                alert("Вы ничего не ввели")
                                :
                                (() => {
                                    dispatch(responseDataWork(inputValue));
                                    // setInputValue('');
                                })()
                        }
                        variant="outlined"
                        color="secondary"
                    >
                        Search Work
                </Button>
                </Grid>
                <TabsBlock 
                    data={data}
                    inputValue={inputValue}
                />
            </Box>

    )
}

export default Main;