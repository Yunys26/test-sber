import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
// Libs
import {
    Typography,
    Grid,
    IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import { useDispatch } from 'react-redux';
// Theme
import { themeSearchBlock } from '../MainBlock/mainBlockTheme';
import { themeTabs } from '../TabsBlock/tabsBlockTheme';
import { openAndCloseModal} from '../../store/slicesStore/mainSlice';

export default function ListWork(props) {

    const { classes, data, funcLogic, statusList, statusListFavorit, colorButtonIcon } = props;

    const dispatch = useDispatch();

    return (
        <>
            {((data.length === 0 && statusList) || (data.length === 0 && statusListFavorit)) ||            
                data.map((el, index) =>
                    <Box key={index} className={classes.blockContent}>
                        <Box className={classes.workBlock} boxShadow={4} id={index} key={index}>
                            <Grid container item={true} className={classes.titleSearchBlock} xs={12} direction="row" justify="space-between" alignItems="center">
                                <Typography className={classes.nameCompany} variant="h3">{el.company}</Typography>
                                {el.company_logo !== null && <img className={classes.workBlockLogo} src={el.company_logo} alt=""></img> || null}
                                <ThemeProvider theme={themeSearchBlock}>
                                <CssBaseline/>
                                    <IconButton key={index} style={ colorButtonIcon && {color: "#f50057"}} className={classes.likeBlack} onClick={() => (localStorage.length <= 3 && funcLogic(index)) || (localStorage.length > 3 && dispatch(openAndCloseModal(true)))} >
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
                            <Typography className={classes.footerSearchBlock} variant="h6">{moment(el.created_at).format('LLLL')}</Typography>
                        </Box>
                    </Box>
                )
            }
        </>
    )
}
