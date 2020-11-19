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
import { showListLocalStorage } from '../../store/slicesStore/mainSlice';

import { addAndDelLocal, updateEffectLocalStorageStore } from '../../store/slicesStore/middleWareMainSlice';

export default function ListWork({ classes, data, statusList, local, showDataText }) {;

    const dispatch = useDispatch();

    // Обновление хранилища localStorageStore
    useEffect(() => {
        updateEffectLocalStorageStore(local, dispatch);
    },[]);
    
    
    return (
        <div>
            {
                (data.length === 0 && statusList) || data.map((el, index) =>
                    <Box className={classes.blockContent} key={el.dataDescription.id}>

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
                                {el.dataDescription.company_logo && <img className={classes.workBlockLogo} src={el.dataDescription.company_logo} alt="Logo Company"></img>}
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

                            { showDataText(el.dataDescription) }

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
    showDataText: PropTypes.func,
}