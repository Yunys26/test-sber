import React, { useState } from 'react';
// Libs
import { useDispatch } from 'react-redux';
import {
    Box,
    Button,
    Typography,
    Grid,
    Input,
    ThemeProvider,
} from '@material-ui/core';
// Store slice
// import { responseDataWork } from '../../store/slicesStore/middleWareMainSlice';
// Theme
import { themeSearchBlock, useSearchBlockStyles } from './mainBlockTheme';
// Components
import TabsBlock from '../TabsBlock/TabsBlock';
import { responseDataWork } from '../../store/slicesStore/mainSlice';

export default function Main(props) {

    const dispatch = useDispatch();

    // Стили
    const classes = useSearchBlockStyles();

    // Состояние input
    const [inputValue, setInputValue] = useState('');
    
    // Проверка input
    const regex = new RegExp('[а-яА-Я]');

    const handleChangeInputValue = React.useCallback((event) => setInputValue(event.target.value));
    const handleClick = React.useCallback(() => dispatch(responseDataWork(inputValue)));
    
    return (
        <Box className={classes.mainBlock} boxShadow={4}>
            <Typography variant="h1" align="center">Work<b>I<span className={classes.textN}>n</span></b>Search</Typography>
            <Grid className={classes.searchBlock} container item direction="row" justify="center" alignItems="center" xs={12}>
                <ThemeProvider theme={themeSearchBlock}>
                    <Input className="" color="secondary" autoFocus value={inputValue} onChange={handleChangeInputValue} placeholder="Enter" />
                </ThemeProvider>
                <Button
                    className={classes.serachButton}
                    onClick={handleClick}
                    variant="outlined"
                    color="secondary"
                    disabled={(inputValue === '') || regex.test(inputValue)}
                >
                    Search Work
            </Button>
            </Grid>
            <TabsBlock
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </Box>
    )
}
