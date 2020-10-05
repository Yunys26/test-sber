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
import { themeSearchBlock } from '../MainBlock/mainBlockTheme';
import { themeTabs } from '../TabsBlock/tabsBlockTheme';
import { openAndCloseModal } from '../../store/slicesStore/mainSlice';

export default function ListWork(props) {

    const { classes, data, funcLogic, statusList } = props;

    const dispatch = useDispatch();

    const handleClick = (index) => {
        (localStorage.length <= 3 && funcLogic(index)) 
        || 
        (localStorage.length > 3 && dispatch(openAndCloseModal(true)))
    };

    return (
        <div>
            {
                data.length === 0 && statusList || data.map((el, index) =>
                    <Box className={classes.blockContent}>

                        <Box className={classes.workBlock} boxShadow={4} id={index} >
                        
                            <Grid container item={true} className={classes.titleSearchBlock} xs={12} direction="row" justify="space-between" alignItems="center">
                                <Typography className={classes.nameCompany} variant="h3">{el.company}</Typography>
                                {(el.company_logo !== null && <img className={classes.workBlockLogo} src={el.company_logo} alt=""></img>) || null}
                                <ThemeProvider theme={themeSearchBlock}>
                                <CssBaseline/>
                                    <IconButton 
                                        className={classes.likeBlack} 
                                        onClick={() => handleClick(index)}
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
                            <Typography className={classes.footerSearchBlock} variant="h6">{data.length !== 1 && moment(el.created_at).format('LLLL')}</Typography>
                        
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