import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



const ModalConfirm = ({open, onClose, onConfirm, title, message}) => {
    

    return (
        <>
            
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="modalCancel" onClick={onClose}>Cancelar</Button>
                    <Button className="modalAgree" onClick={onConfirm} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default ModalConfirm