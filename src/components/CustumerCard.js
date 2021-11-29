import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';




const CustumerCard = ({email,
    firstName,
    lastName,
    avatar,}) => {

const [classes, setClasses] = useState()        
const changeColor = ()=>{
    
    if(classes ==='changeColorHeart'){
        setClasses('')
    }else{
        setClasses('changeColorHeart')
    }
}
    return (
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
                <IconButton onClick={()=>{changeColor()}} aria-label="add to favorites">
                    <FavoriteIcon  className={classes} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                
            </CardActions>
        </Card>
    );
}
export default CustumerCard