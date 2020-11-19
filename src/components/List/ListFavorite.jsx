import React from 'react';
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
import { deleteWorkInLocalStorageStore } from '../../store/slicesStore/mainSlice';

import { updateLocalStorageAndStoreFavorit } from '../../store/slicesStore/middleWareMainSlice';

export default function ListFavorite({ classes, statusListFavorit, local, showDataText }) {

    const dispatch = useDispatch();

    return (
        <div>
            {
                (Object.keys(local[0] || {}).length === 0 && statusListFavorit) || Object.values(...local || {}).map((el) =>
                    <Box className={classes.blockContent} key={el.id}>
                        <Box className={classes.workBlock} boxShadow={4}>
                            
                            <Grid 
                                container 
                                item={true} 
                                xs={12}
                                className={classes.titleSearchBlock} 
                                direction="row" 
                                justify="space-between" 
                                alignItems="center"
                            >
                                <Typography className={classes.nameCompany} variant="h3">{el.company}</Typography>
                                {el.company_logo && <img className={classes.workBlockLogo} src={el.company_logo} alt="Logo Company"></img>}
                                <IconButton
                                    style={{color: "#f50057"}} 
                                    className={classes.likeBlack}
                                    onClick={() => dispatch(deleteWorkInLocalStorageStore(updateLocalStorageAndStoreFavorit(el.id, local)))}
                                >
                                    <FavoriteIcon className={classes.likeBlack} />
                                </IconButton>
                            </Grid>

                            { showDataText(el) }
                            
                            <ThemeProvider theme={themeTabs}>
                                <CssBaseline/>
                                <div className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: el.description }}></div>
                                <div className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: el.how_to_apply }}></div>
                            </ThemeProvider>
                            <Typography className={classes.footerSearchBlock} variant="h6">{el.length !== 1 && moment(el.created_at).format('LLLL')}</Typography>
                        
                        </Box>
                        
                    </Box>
                )
            }
        </div>
    )
}

ListFavorite.propTypes = {
    classes: PropTypes.object,
    statusListFavorit: PropTypes.object,
    local: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    showDataText: PropTypes.func,
}