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
import FavoriteIcon from '@material-ui/icons/Favorite';
// SLice Store
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
    textN: {
        color: "#f50057",
    },
    searchBlock: {
        marginTop: '4rem',
        marginBottom: '4rem'
    },
    serachButton: {
        marginLeft: '4rem',
    },
    nameCompany: {
        fontSize: "41px",
        padding: "10px",
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        '&:hover': {
            transition: "0.5s",
            backgroundColor: "white",
            color: "Black",
        }
    },
    
    workBlock: {
        borderRadius: "20px",
        backgroundColor: "#e8e8e8",
        alignItems: "center",
        padding: "40px",
    },
    workBlockLogo: {
        width: "400px",
        height: "160px",
    },
    likeBlack: {
        width: "64px",
        height: "64px",
        '&:active': {
            color: "#f50057",
        }
    },
    likePrimary: {
        width: "64px",
        height: "64px",
        '&:active': {
            color: "#f50057",
        }
    },
    blockContent: {
        marginBottom: "40px",
    },
    headerSearchBlock: {
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        textAlign: "center",
        marginBottom: "20px",
    },
    titleSearchBlock : {
        marginBottom: "50px"
    },
    footerSearchBlock: {
        borderRadius: "20px",
        marginTop: "20px",
        backgroundColor: "black",
        color: "#f50057",
        textAlign: "center",
    }
})

function Main(props) {
    // Hooks
    const data = useSelector( state => state.main.dataResponse );

    const dispatch = useDispatch();

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');
    // Добавление/Удаление в избранное
    const addAndDelInFavorite = (index) => {

        for(let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === `${inputValue}?${index}`) {
                localStorage.removeItem(localStorage.key(i));
                return alert("Удалено из избранного");
            }
        }
        localStorage.setItem(`${inputValue}?${index}`, JSON.stringify(data[index]));
        alert('Добавлено в избранное');
    };
    // Удаление из localStorage
    const deleteListFavorite = (index) => {
        for (let i = 0; i < localStorage.length; i++) {
            if (i === index) {
                localStorage.removeItem(localStorage.key(i));
                return alert("Удалено из избранного");
            }
        }
    }
    // Обработка описания
    const descriptionProcessing = (str) => {
        // let result = str.split('\n').join().split('<p>').join().split('</p>').join().split('<li>').join().split('</li>').join().split('<ul>').join().split('</ul>').join().split('<strong>').join().split('</strong>').join().split(',,,');
        let result = str.split('\n').join().split('<p>').join().split('</p>').join().split(',,,');
        // console.log(result)
        return result;
    };

    return (
        <Box className={classes.mainBlock} boxShadow={4}>
            <Typography variant="h1" align="center">Work<b>I<span className={classes.textN}>n</span></b>Search</Typography>
            <Grid className={classes.searchBlock} container direction="row" justify="center" alignItems="center" xs={12}>
                <ThemeProvider theme={themeSearchBlock}>
                    <CssBaseline />
                    <Input className="" color="secondary" autoFocus={true} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter"/>
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
            {data.map( (el, index) => 
                <Box className={classes.blockContent}>
                    <Box className={classes.workBlock} boxShadow={4} id={index} key={index}>
                        <Grid container className={classes.titleSearchBlock} xs={12} direction="row" justify="space-between" alignItems="center">
                            <Typography class={classes.nameCompany} variant="h3">{el.company}</Typography>
                            <img className={classes.workBlockLogo} src={el.company_logo} alt=""></img>
                            <IconButton className={classes.likeBlack} onClick={() => addAndDelInFavorite(index)} >
                                <FavoriteIcon className={classes.likeBlack} />
                            </IconButton>
                        </Grid>
                        <Typography variant="h5"><b>Title:</b> {el.title}</Typography>
                        <Typography variant="h5"><b>Company:</b> {el.company}</Typography>
                        <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                        <Typography variant="h5"><b>Type:</b> {el.type}</Typography>
                        <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                        {descriptionProcessing(el.description).map( (el) => <Typography variant="subtitle1">{el}</Typography>)}
                        <Typography className={classes.footerSearchBlock} variant="h6">{el.created_at}</Typography>
                        {/* {el.how_to_apply}<br/> */}
                    </Box>
                </Box>)}
            <Box>
                {(localStorage.length === 0) ? null : () => {

                    let favoritWork = [];

                    for (let i = 0; i < localStorage.length; i++) {

                        favoritWork.push(JSON.parse(localStorage.getItem( localStorage.key(i))));
                    }

                    return favoritWork.map( (el, index) => 
                        <Box>
                            <Typography className={classes.headerSearchBlock} variant="h2">Favorit</Typography>
                            <Box className={classes.workBlock} boxShadow={4} id={index} key={index}>
                    
                                <Grid container className={classes.titleSearchBlock} xs={12} direction="row" justify="space-between" alignItems="center">
                                    <Typography class={classes.nameCompany} variant="h3">{el.company}</Typography>
                                    <img className={classes.workBlockLogo} src={el.company_logo} alt=""></img>
                                    <IconButton color="secondary" className={classes.likePrimary} onClick={() => deleteListFavorite(index)} >
                                        <FavoriteIcon className={classes.likePrimary} />
                                    </IconButton>
                                </Grid>
                                <Typography variant="h5"><b>Title:</b> {el.title}</Typography>
                                <Typography variant="h5"><b>Company:</b> {el.company}</Typography>
                                <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                                <Typography variant="h5"><b>Type:</b> {el.type}</Typography>
                                <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                                {descriptionProcessing(el.description).map( (el) => <Typography variant="subtitle1">{el}</Typography>)}
                                <Typography className={classes.footerSearchBlock} variant="h6">{el.created_at}</Typography>
                                {/* {el.how_to_apply}<br/> */}
                            </Box>
                        </Box>
                    )}
                }
            </Box>
        </Box>
    )
}

export default Main;