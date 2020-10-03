import React, { useState } from 'react';
// Libs
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Button,
    Typography,
    Grid,
    Input,
    ThemeProvider,
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
    
    const regex = new RegExp('[а-яА-Я]');

    return (
            <Box className={classes.mainBlock} boxShadow={4}>
                <Typography variant="h1" align="center">Work<b>I<span className={classes.textN}>n</span></b>Search</Typography>
                <Grid className={classes.searchBlock} container item direction="row" justify="center" alignItems="center" xs={12}>
                    <ThemeProvider theme={themeSearchBlock}>
                        <Input className="" color="secondary" autoFocus value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter" />
                    </ThemeProvider>
                    <Button
                        className={classes.serachButton}
                        onClick={ () => dispatch(responseDataWork(inputValue))}
                        //     () => (inputValue === '') ?
                        //         alert("Вы ничего не ввели")
                        //         :
                        //         (() => {
                        //             dispatch(responseDataWork(inputValue));
                        //             // setInputValue('');
                        //         })()
                        // }
                        variant="outlined"
                        color="secondary"
                        disabled={true && inputValue === '' || regex.test(inputValue)}
                    >
                        Search Work
                </Button>
                </Grid>
                <TabsBlock 
                    data={data}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </Box>

    )
}

export default Main;