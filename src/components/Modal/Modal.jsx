import React from 'react';
// Libs
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Fade, Modal } from '@material-ui/core';
// Theme
import { useStyles } from './ModalTheme';
//  Store slice
import { openAndCloseModal } from '../../store/slicesStore/mainSlice';

export default function ModalS({ open }) {

    const classes = useStyles();

    const dispatch = useDispatch();
    
    const handleCloseModal = React.useCallback(() => dispatch(openAndCloseModal(false)), [dispatch]);
    
    const handleCloseModalButton = React.useCallback(() => {
        localStorage.clear();
        dispatch(openAndCloseModal(false));
    });

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropProps={{timeout: 500}}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="spring-modal-title">Warning</h2>
                    <p id="spring-modal-description"><b>Maximum limit reached</b></p>
                    <div className={classes.footerButton}>
                        <Button onClick={handleCloseModal}>Ок</Button>
                        <Button 
                            className={classes.buttonLastModal} 
                            variant="outlined" 
                            color="secondary" 
                            onClick={handleCloseModalButton}
                        >
                            <b>Delete all favorites</b>
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
