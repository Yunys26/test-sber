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
import { useDispatch } from 'react-redux';
// Theme
import { themeTabs } from '../TabsBlock/tabsBlockTheme';
import { openAndCloseModal, showListLocalStorage } from '../../store/slicesStore/mainSlice';

import { addAndDelLocal } from '../../store/slicesStore/middleWareMainSlice';

export default function ListWork({ classes, data, statusList, local }) {;

    const dispatch = useDispatch();

    // Обновление хранилища localStorageStore
    useEffect(() => {
        if (localStorage.length !== 0) {
            dispatch(showListLocalStorage(JSON.parse(localStorage.getItem('local'))))
            return () => {
                localStorage.getItem('local', JSON.stringify(local));
            }
        } else if (localStorage.length >= 20) {
            dispatch(openAndCloseModal(true))
        }
    },[]);
    
    return (
        <div>
            {
                (data.length === 0 && statusList) || data.map((el, index) =>
                    <Box className={classes.blockContent} key={el.id}>

                        <Box className={classes.workBlock} boxShadow={4}>
                        
                            <Grid 
                                container 
                                item={true} 
                                className={classes.titleSearchBlock} 
                                xs={12} 
                                direction="row" 
                                justify="space-between" 
                                alignItems="center"
                            >
                                <Typography className={classes.nameCompany} variant="h3">{el.dataDescription.company}</Typography>
                                {(el.dataDescription.company_logo !== null && <img className={classes.workBlockLogo} src={el.dataDescription.company_logo} alt=""></img>) || null}
                                <IconButton
                                    id={el.dataDescription.id}
                                    style={{color: local[el.id] && "#f50057"} || null}
                                    className={classes.likeBlack} 
                                    onClick={() => {
                                        dispatch(showListLocalStorage(addAndDelLocal(el.dataDescription.id, index, data, local)));
                                    }}>
                                    <FavoriteIcon className={classes.likeBlack} />
                                </IconButton>

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
    local: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}