import React from "react";
import Typography from '@mui/material/Typography';
const Page = ({title, Component})=>{
    return(
        <>
        <Typography  variant="h3" component="h2" gutterBottom>
            {title}
        </Typography>
        <Component />
        </>
    )
}

export default Page