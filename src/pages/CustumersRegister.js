import React from "react";
import axios from "axios";
import Toasty from "../components/Toasty";
import {useState} from "react";
import { Box, TextField, Button, CircularProgress  } from "@mui/material";


const CustumersRegister = () => {

    const [form, setForm] = useState({
        name:{
            value:'',
            error:false,
            helperText:'',
        },
        job:{
            value:'',
            error:false,
            helperText:'',
        },
    })
    
    const [openToasty, setOpenToasty] = useState({
        open:false,
        text:'',
        severity:'',
    })
    const [openProgress, setOpenProgress] = useState(false)
    const handleInputChange = (e) => {
        const {name,value} = e.target

        setForm({
            ...form,
            [name]:{
                value:value,
            },
        })
    }
    const handleRegisterButton= ()=>{
        let hasError= false
        setOpenProgress(true)
        let newFormState ={
            ...form
        }
        if(!form.name.value){
            hasError = true

            newFormState.name = {
                value:form.name.value,
                error:true,
                helperText: "Digite o campo nome corretamente!"
            }
        }
        if(!form.job.value){
            hasError= true

            newFormState.job = {
                value:form.job.value,
                error:true,
                helperText: "Digite o campo job corretamente!"
            }
        }
        if(hasError){
            setOpenProgress(false)
            return setForm(newFormState)
        }
        
        axios.post('https://reqres.in/api/users',{
            name: form.name.value,
            job: form.job.value,
        }).then(()=>{
            setOpenToasty({
                open:true,
                text:"Cadastro realizado com sucesso!",
                severity:"success"})
                setOpenProgress(false)
        }).catch(()=>{
            setOpenToasty({
                open:true,
                text:"Ocorreu uma falha entre em contato com o suporte!",
                severity:"error"})
                setOpenProgress(false)
        })
    }

    

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                error={form.name.error}
                id="outlined-basic"
                name="name" 
                label="Digite o seu nome"  
                variant="outlined" 
                value={form.name.value} 
                onChange={handleInputChange} 
                helperText={form.name.error ? form.name.helperText:''}
                /><br />
                <TextField 
                helperText={form.name.error ? form.job.helperText:''}
                error={form.job.error} 
                id="outlined-basic" name="job"  
                label="Digite o seu cargo" 
                variant="outlined" 
                value={form.job.value} 
                onChange={handleInputChange} 
                /><br />
                <Button disabled={openProgress} variant="outlined" onClick={() => handleRegisterButton()}>
                    {
                        openProgress ? 
                        <>Cadastrar...<CircularProgress size={20} sx={{ marginLeft:'20px'}} /></>: `Cadastrar`
                    }
                    
                </Button>
            </Box>
            <Toasty 
            open={openToasty.open} 
            severity={openToasty.severity} 
            text={openToasty.text}
            onClose={()=> setOpenToasty({open:false})}
            />
            
        </>
    )
}

export default CustumersRegister