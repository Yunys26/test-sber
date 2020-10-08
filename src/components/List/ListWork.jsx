import React, { useEffect } from 'react';
// Libs
import {
    Typography,
    Grid,
    IconButton,
    Box, 
    CssBaseline, 
    ThemeProvider
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
// Theme
import { themeSearchBlock } from '../MainBlock/mainBlockTheme';
import { themeTabs } from '../TabsBlock/tabsBlockTheme';
import { showListLocalStorage } from '../../store/slicesStore/mainSlice';
import { addAndDelLocal } from '../../store/slicesStore/middleWareMainSlice';

export default function ListWork(props) {

    const { classes, data, funcLogic, statusList } = props;

    const dispatch = useDispatch();

    const local = useSelector(state => state.main.localStorageStore);

    // Обновление хранилища localStorageStore
    useEffect(() => {
        if (localStorage.length !== 0) {
            dispatch(showListLocalStorage(JSON.parse(localStorage.getItem('local'))))
            return () => {
                localStorage.getItem('local', JSON.stringify(local));   
            }
        }
    }, []);

    return (
        <div>
            {
                data.length === 0 && statusList || data.map((el, index) =>
                    <Box className={classes.blockContent}>

                        <Box className={classes.workBlock} boxShadow={4} id={index} >
                        
                            <Grid container item={true} className={classes.titleSearchBlock} xs={12} direction="row" justify="space-between" alignItems="center">
                                <Typography className={classes.nameCompany} variant="h3">{el.dataDescription.company}</Typography>
                                {(el.dataDescription.company_logo !== null && <img className={classes.workBlockLogo} src={el.dataDescription.company_logo} alt=""></img>) || null}
                                <ThemeProvider theme={themeSearchBlock}>
                                <CssBaseline/>
                                    <IconButton
                                        id={el.dataDescription.id}
                                        style={{color: local[el.id] && "#f50057"} || null}
                                        className={classes.likeBlack} 
                                        onClick={() => {
                                            dispatch(showListLocalStorage(addAndDelLocal(el.dataDescription.id, index, data, local)));
                                        }}>
                                        <FavoriteIcon className={classes.likeBlack} />
                                    </IconButton>
                                </ThemeProvider>
                            </Grid>
                            
                            <Typography variant="h5"><b>Title:</b> {el.dataDescription.title}</Typography>
                            <Typography variant="h5"><b>Company:</b> {el.dataDescription.company}</Typography>
                            <Typography variant="h5"><b>Location:</b> {el.dataDescription.location}</Typography>
                            <Typography variant="h5"><b>Type:</b> {el.dataDescription.type}</Typography>
                            <Typography variant="h5"><b>Location:</b> {el.dataDescription.location}</Typography>
                            <ThemeProvider theme={themeTabs}>
                            <CssBaseline/>
                                <div className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: el.dataDescription.description }}></div>
                                <div className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: el.dataDescription.how_to_apply }}></div>
                            </ThemeProvider>
                            <Typography className={classes.footerSearchBlock} variant="h6">{data.length !== 1 && moment(el.dataDescription.created_at).format('LLLL')}</Typography>
                        
                        </Box>
                        
                    </Box>
                )
            }
        </div> 
    )
}

ListWork.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.array,
    statusList: PropTypes.object,
    funcLogic: PropTypes.func,
}