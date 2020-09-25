import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Button,
    Typography,
    Grid,
    Input,
    ThemeProvider,
    makeStyles,
    createMuiTheme,
    CssBaseline
} from '@material-ui/core';
import { clickIncrement, getData, responseDataWork } from './features/mainSlice/mainSlice';

const themeSearchBlock = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                input: {
                    textAlign: 'center',
                },
            },
        },
    },
    'MuiInputBase-input': {
        width: '300px',
    }
});

const useStyles = makeStyles({
    mainBlock: {
        padding: '100px',
        margin: '10%',
        borderRadius: '20px',
        border: '1px solid black',
    },
    searchBlock: {
        marginTop: '4rem',
    },
    serachButton: {
        marginLeft: '4rem',
    },
    span: {
        spanWork: {
            color: 'primary.main',
        },
        spanSearch: {
            color: '#8a3e4c',
        },
    },

})

function Main(props) {
    // Hooks
    const data = useSelector( state => state.main.dataResponse );

    const dispatch = useDispatch();

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');

    return (
        <Box className={classes.mainBlock} boxShadow={4}>
            <Typography
                variant="h2"
                align="center"
            >
                WorkInSearch
            </Typography>
            <Grid
                className={classes.searchBlock}
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
            >
                <ThemeProvider theme={themeSearchBlock}>
                    <CssBaseline />
                    <Input
                        className=""
                        color="secondary"
                        autoFocus={true}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Enter"
                    // placeholder="Enter programming language"
                    />
                </ThemeProvider>
                <Button
                    className={classes.serachButton}
                    // onClick={() => (inputValue === '') ? alert("Вы ничего не ввели") : dispatch(getData(inputValue))}
                    onClick={ () => {
                        dispatch(responseDataWork(inputValue));
                        setInputValue('');
                    }}
                    variant="outlined" 
                    color="secondary"
                >
                    Search Work
                </Button>
            </Grid>
            {/* {data.map( (el, i) => <p>{el.id}</p> )} */}
            {console.log(data)}
        </Box>
    )
}

export default Main;