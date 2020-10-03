import { Button, Fade, Modal } from '@material-ui/core';
import React from 'react'
import { useStyles } from './ModalTheme';
import { useDispatch } from 'react-redux';
import { openAndCloseModal } from '../../store/slicesStore/mainSlice';

export default function ModalS(props) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const { open } = props
    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => dispatch(openAndCloseModal(false))}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="spring-modal-title">Warning</h2>
                    <p id="spring-modal-description">Maximum limit reached</p>
                    <Button onClick={() => dispatch(openAndCloseModal(false))}>Ок</Button>
                    <Button onClick={() => {
                        localStorage.clear();
                        dispatch(openAndCloseModal(false));
                        }}
                    >
                        <b>Удалить все избранное</b>
                    </Button>
                </div>
            </Fade>
        </Modal>
    )
}
