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
import { useSelector } from 'react-redux';
// Theme
import { themeSearchBlock } from '../MainBlock/mainBlockTheme';
import { themeTabs } from '../TabsBlock/tabsBlockTheme';

export default function ListFavorite(props) {

    const { classes, funcLogic, statusListFavorit } = props;

    const local = useSelector(state => state.main.localStorageStore);

    return (
        <div>
            {
                local.length === 0 && statusListFavorit || Object.values(...local).map((el) => 
                    <Box className={classes.blockContent}>
                        <Box className={classes.workBlock} boxShadow={4} id={el.id} >
                            
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
                                    {(el.company_logo !== null && <img className={classes.workBlockLogo} src={el.company_logo} alt=""></img>) || null}
                                    <ThemeProvider theme={themeSearchBlock}>
                                    <CssBaseline/>
                                        <IconButton
                                            style={{color: "#f50057"}} 
                                            className={classes.likeBlack} 
                                        >
                                            <FavoriteIcon className={classes.likeBlack} />
                                        </IconButton>
                                    </ThemeProvider>
                            </Grid>
                            
                            <Typography variant="h5"><b>Title:</b> {el.title}</Typography>
                            <Typography variant="h5"><b>Company:</b> {el.company}</Typography>
                            <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                            <Typography variant="h5"><b>Type:</b> {el.type}</Typography>
                            <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                            <ThemeProvider theme={themeTabs}>
                            <CssBaseline/>
                                <div className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: el.description }}></div>
                                <div className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: el.how_to_apply }}></div>
                            </ThemeProvider>
                            <Typography className={classes.footerSearchBlock} variant="h6">{local.length !== 1 && moment(el.created_at).format('LLLL')}</Typography>
                        
                        </Box>
                        
                    </Box>
                )
            }
        </div>
    )
}

ListFavorite.propTypes = {
    classes: PropTypes.object,
    funcLogic: PropTypes.func,
    statusListFavorit: PropTypes.object,
}