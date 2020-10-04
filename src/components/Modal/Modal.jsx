import React from 'react';
// Libs
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Fade, Modal } from '@material-ui/core';
// Theme
import { useStyles } from './ModalTheme';
//  Store slice
import { openAndCloseModal } from '../../store/slicesStore/mainSlice';

export default function ModalS(props) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const { open } = props;
    
    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => dispatch(openAndCloseModal(false))}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="spring-modal-title">Warning</h2>
                    <p id="spring-modal-description"><b>Maximum limit reached</b></p>
                    <div className={classes.footerButton}>
                        <Button onClick={() => dispatch(openAndCloseModal(false))}>Ок</Button>
                        <Button className={classes.buttonLastModal} variant="outlined" color="secondary" onClick={() => {
                            localStorage.clear();
                            dispatch(openAndCloseModal(false));
                        }}
                        >
                            <b>Удалить все избранное</b>
                        </Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

Modal.propTypes = {
    open: PropTypes.bool,
};
