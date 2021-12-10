import * as React from 'react';
import { useState } from "react";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

import Modal from './ModalConfirm'




const CustumerCard = ({
    id, 
    email,
    firstName,
    lastName,
    avatar, 
    onRemoveCustumer,
    onEditCustumer}) => {

    const [classes, setClasses] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    
    
    const handleToggleModal = () => {
        setModalOpen(!modalOpen)
    }
    const handleConfirmModal = (id) => {
        onRemoveCustumer(id)
        setModalOpen(!modalOpen)
    }
    const handleRemoveCustomer = () => {
        handleToggleModal()
    }
    const handleEditCustomer = (id) => {
        onEditCustumer(id)
    }
    
    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} src={avatar} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={`${firstName}  ${lastName}`}
                subheader={email}
            />
            <CardActions disableSpacing>
                <IconButton onClick={() => handleEditCustomer(id)}>
                    <EditIcon className={classes} />
                </IconButton>
                <IconButton onClick={() => handleRemoveCustomer()}>
                    <DeleteIcon  />
                </IconButton>
            </CardActions>
        </Card>
        <Modal 
        open={modalOpen} 
        onClose={() => handleToggleModal()}
        onConfirm={() => handleConfirmModal(id)}
        title="Deseja Excluir Esse Usuario?"
        message="Essa ação não pode ser desfeita!"/>
        </>
    );
}
export default CustumerCard