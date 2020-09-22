import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Grid, Input, makeStyles } from '@material-ui/core';
import { getData, showData } from './features/mainSlice/mainSlice';
import axios from 'axios';

const useStyles = makeStyles({
    mainBlock: {

    }
})

export default function Main() {

    // const 

    const dispatch = useDispatch();

    const classes = useStyles();

    const [inputValue, setInputValue] = React.useState('')

    const send = async () => {
        await axios.get('http://localhost:9999')
            .then( res => console.log(res))
            .catch( err => console.log(err)); 
    };

    return (
        <Box>
            <Grid container direction="row" justify="center" alignItems="center">
                <Input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="Введите город"
                />
                <Button className={classes.mainBlock} onClick={() => dispatch(getData(inputValue))}>Search Work</Button>
                <Button onClick={send}>send</Button>
            </Grid>
            <Box>
                
            </Box>
        </Box>
    )
}
