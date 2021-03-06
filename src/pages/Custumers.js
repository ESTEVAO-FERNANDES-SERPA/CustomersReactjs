import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import {useNavigate } from "react-router-dom";
import CustumerCard from "../components/CustumerCard";
const Custumers = () => {
    const navigate = useNavigate();
    const [custumers, setCustumers] = useState([])

    

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((response) => {
                const { data } = response.data
                setCustumers(data)
            })
    }, [])

    const handleRemoveCustomer = (id) => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(()=>{
            const newCustumersState = custumers.filter(custumer => custumer.id !== id)

            setCustumers(newCustumersState)
        })
    }

    const handleEditCustomer = id => {
        navigate(`/custumers/edit${id}`,{ state: { id:id,  } })
    }

    return (
        <>
            
            <Grid 
            container
            spacing={4}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
             >
                {
                    custumers.map((custumer) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} >
                                <CustumerCard
                                    id={custumer.id}
                                    email={custumer.email}
                                    firstName={custumer.first_name}
                                    lastName={custumer.last_name}
                                    avatar={custumer.avatar}
                                    onRemoveCustumer={handleRemoveCustomer}
                                    onEditCustumer={handleEditCustomer}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Custumers