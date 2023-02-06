import React, { useState, useEffect } from 'react';
import { Button, Input, Typography } from '@mui/material';
import { ArrowRightAlt, Lock, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services';
import StyledInput from './styles/StyledInput';
import StyledLoginBox from './styles/StyledLoginBox';
import * as util from '../util';
import * as hp from '../helper';

const Login = ({ setAlert }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const redirectWithDisclaimerCheck = () => {
    localStorage.getItem(util.DISCLAIMER_ACCEPTED) ? navigate('/stations') : navigate('/disclaimer');
  }

  useEffect(() => {
    const login = () => {
      if (localStorage.getItem(util.TOKEN)) {
        redirectWithDisclaimerCheck();
      }
    }

    login();
  }, []);

  const handleLogin = async () => {
    const eml = email.toString().trim();
    const pass = password.toString().trim();
    if (eml !== "" && pass !== ""){
      let res = await login({ email: eml, password: pass });
      if (res.status === 200 && res.ok) {
        res = await res.json();
        if (res.hasOwnProperty('token')) {
          hp.showAlert({ setAlert, status: util.LOGIN_SUCCESSFUL })
          setTimeout(() => {
            localStorage.setItem(util.TOKEN, res.token);
            redirectWithDisclaimerCheck();
          }, 2000);
        }
      }else {
        hp.showAlert({ setAlert, status: util.SOMETHING_WRONG });
        setEmail("");
        setPassword("");
      }
      
    } else {
      hp.showAlert({ setAlert, status: util.MANDATORY_FIELDS_EMPTY });
    }
    
  } 

  return (
    <StyledLoginBox>
       <img height="150px" alt="Not Available" width="150px" src="logo.png" /> 
       <p style={{ fontSize: 30, fontWeight: 'bold' }}>Login</p>

       <StyledInput>
            <Email sx={{ color: 'red' }}></Email>
           <Input onChange={el => setEmail(el.target.value)} value={ email } fullWidth sx={{ height: '100%', pl: 2 }} disableUnderline placeholder="Enter your email" />
       </StyledInput>
       <StyledInput>
           <Lock sx={{ color: 'red' }}></Lock>
           <Input onChange={el => setPassword(el.target.value)} value={ password } fullWidth sx={{ height: '100%', pl: 2 }} disableUnderline placeholder="Enter your password"></Input>
       </StyledInput>
       <Button 
       variant="contained" 
       onClick={ handleLogin } 
       sx={{ borderRadius: 10,padding: 2, height: 50, gap: 1 }} 
       >
            <p>Login</p>
           <ArrowRightAlt></ArrowRightAlt>
       </Button>
       <Button variant="text">
            <Typography variant="p" sx={{ fontWeight: 500, color: 'black' } }>Forgot Password?</Typography>
       </Button>
    </StyledLoginBox>
  )
}

export default Login