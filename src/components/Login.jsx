import React from 'react';
import { Box, Button, Input, Typography, styled } from '@mui/material';
import { ArrowRightAlt, Lock, Email } from '@mui/icons-material';

const StyledInput = styled(Box)({ 
  paddingLeft: 5, 
  height: 50, 
  width: '80%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: 1,
});

const login = () => {
  return (
    <Box
    sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        pt: 15,
    }}>
       <img height="100px" width="100px" src="" /> 
       <p style={{ fontSize: 30, fontWeight: 'bold' }}>Login</p>

       <StyledInput>
            <Email sx={{ color: 'red' }}></Email>
           <Input fullWidth sx={{ height: '100%', pl: 2 }} disableUnderline placeholder="Enter your email" />
       </StyledInput>
       <StyledInput>
           <Lock sx={{ color: 'red' }}></Lock>
           <Input fullWidth sx={{ height: '100%', pl: 2 }} disableUnderline placeholder="Enter your password"></Input>
       </StyledInput>
       <Button variant="contained" sx={{ borderRadius: 10,padding: 2, height: 50, gap: 1 }} >
            <p>Login</p>
           <ArrowRightAlt></ArrowRightAlt>
       </Button>
       <Button variant="text">
            <Typography variant="p" sx={{ fontWeight: 500, color: 'black', fontWeight: 500 } }>Forgot Password?</Typography>
       </Button>
    </Box>
  )
}

export default login