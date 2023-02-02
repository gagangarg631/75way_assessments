import React, { useState } from 'react';
import { Box, Button, Input, Typography, styled } from '@mui/material';
import { ArrowRightAlt, Lock, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services';

const StyledInput = styled(Box)({ 
  paddingLeft: 5, 
  height: 50, 
  width: '80%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: 1,
});

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Box
    sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        pt: 10,
        backgroundColor: 'white'
    }}>
       <img height="150px" alt="Not Available" width="150px" src="logo.png" /> 
       <p style={{ fontSize: 30, fontWeight: 'bold' }}>Login</p>

       <StyledInput>
            <Email sx={{ color: 'red' }}></Email>
           <Input onChange={el => setEmail(el.target.value)} fullWidth sx={{ height: '100%', pl: 2 }} disableUnderline placeholder="Enter your email" />
       </StyledInput>
       <StyledInput>
           <Lock sx={{ color: 'red' }}></Lock>
           <Input onChange={el => setPassword(el.target.value)} fullWidth sx={{ height: '100%', pl: 2 }} disableUnderline placeholder="Enter your password"></Input>
       </StyledInput>
       <Button 
       variant="contained" 
       onClick={async () => {
        const eml = email.toString().trim();
        const pass = password.toString().trim();
        if (eml !== "" && pass !== ""){
          let res = await login(eml, pass);
          if (res.status === 200 && res.ok) {
            res = await res.json();
            if (res.hasOwnProperty('token')) {
              
              // if first time, navigate to /disclaimer otherwise navigate to /stations
              if (localStorage.getItem('station')) {
                navigate('/stations');
              }else {
                localStorage.setItem('station', {
                  token: res.token,
                })
                navigate('/disclaimer');
              }
              
            }
          }else {
            alert('Something Went Wrong');
            setEmail("");
            setPassword("");
          }
          
        }
       }} 
       sx={{ borderRadius: 10,padding: 2, height: 50, gap: 1 }} 
       >
            <p>Login</p>
           <ArrowRightAlt></ArrowRightAlt>
       </Button>
       <Button variant="text">
            <Typography variant="p" sx={{ fontWeight: 500, color: 'black' } }>Forgot Password?</Typography>
       </Button>
    </Box>
  )
}

export default Login