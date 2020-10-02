import { Box } from '@material-ui/core';
import React from 'react';
import {
    Typography,
    Grid,
    IconButton,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';

export default function ListWork(props) {
    const { classes,  data, funcLogic} = props;

    return (
        <Box>
            {
                data.map((el, index) =>
                    <Box key={index} className={classes.blockContent}>
                        <Box className={classes.workBlock} boxShadow={4} id={index} key={index}>
                            <Grid container item={true} className={classes.titleSearchBlock} xs={12} direction="row" justify="space-between" alignItems="center">
                                <Typography className={classes.nameCompany} variant="h3">{el.company}</Typography>
                                <img className={classes.workBlockLogo} src={el.company_logo} alt=""></img>
                                <IconButton className={classes.likeBlack} onClick={() => funcLogic(index)} >
                                    <FavoriteIcon className={classes.likeBlack} />
                                </IconButton>
                            </Grid>
                            <Typography variant="h5"><b>Title:</b> {el.title}</Typography>
                            <Typography variant="h5"><b>Company:</b> {el.company}</Typography>
                            <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                            <Typography variant="h5"><b>Type:</b> {el.type}</Typography>
                            <Typography variant="h5"><b>Location:</b> {el.location}</Typography>
                            <div dangerouslySetInnerHTML={{ __html: el.description }}></div>
                            <div dangerouslySetInnerHTML={{ __html: el.how_to_apply }}></div>
                            <Typography className={classes.footerSearchBlock} variant="h6">{el.created_at}</Typography>
                        </Box>
                    </Box>
                )}
        </Box>
    )
}
