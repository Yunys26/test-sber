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
    makeStyles,
    createMuiTheme,
    CssBaseline, 
    IconButton
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// MainSLice
import { responseDataWork } from './store/slicesStore/mainSlice';

// Изменение элементов глобально, обращение к корневым стилям
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

// Созданный стиль для компоненты
const useStyles = makeStyles({
    mainBlock: {
        padding: '100px',
        margin: '10%',
        borderRadius: '20px',
        border: '1px solid black',
    },
    searchBlock: {
        marginTop: '4rem',
        marginBottom: '4rem'
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

    const [favoritWork, setfavoritWork] = useState([]);
    
    const addInFavorite = (index) => {
        localStorage.setItem(index, JSON.stringify(data[index]));
        
        // let a = JSON.stringify(data[index]);

        // console.log(JSON.parse(a))
        // localStorage.setItem(index, data[index]);
        alert('Добавлено в избранное');
    };

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
                    onClick={ 
                        () => (inputValue === '') ? 
                            alert("Вы ничего не ввели") 
                            : 
                            (() => {
                                dispatch(responseDataWork(inputValue));
                                setInputValue('');
                            })()
                        // аналог
                        // () => {
                        //     if (inputValue === '') {
                        //         alert("Вы ничего не ввели");
                        //     } else {
                        //         dispatch(responseDataWork(inputValue));
                        //         setInputValue('');
                        //     }
                        // }
                    }
                    variant="outlined" 
                    color="secondary"
                >
                Search Work
                </Button>
            </Grid>
            <Grid>
            {data.map( (el, index) => 
                <Box boxShadow={4} id={index}>
                    {el.company}<br/>
                    <img src={el.company_logo}></img><br/> 
                    {el.company_url}<br/>
                    {el.created_at}<br/>
                    {el.description}<br/>
                    {el.how_to_apply}<br/>
                    {el.location}<br/>
                    {el.title}<br/>
                    {el.type}
                    <IconButton onClick={() => addInFavorite(index)} >
                        <FavoriteBorderIcon />
                    </IconButton>
                </Box>)}
            </Grid>
            {console.log(localStorage.key(1))}
            {/* {console.log(localStorage.getItem(localStorage.key(0)))} */}
            {/* {(localStorage.length === 0) ? null : ( () => {
                for (let x = 0; x < localStorage.length - 1; x++) {
                    return [JSON.parse(localStorage.getItem(localStorage.key(x)))].map( (el) => <p>{el.id}</p>)
                }
            })()} */}
        </Box>
    )
}

export default Main;