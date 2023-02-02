import { Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import StyledBox from './StyledBox';
import StyledButton from './StyledButton';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Detail = () => {
  const [timer, setTimer] = useState(Math.ceil(Math.random() * 20));
  const [timerID, setTimerID] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [control, setControl] = useState("Stop");

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer(prevTime => prevTime + 1);
    }, 1000);
    setTimerID(id);
  }

  const stopTimer = () => {
    clearInterval(timerID);
  }

  useEffect(() => {
    startTimer();
  }, []);

  return (
      <Box sx={{ paddingTop: 10 }}>
          <Box>
            <ArrowBack onClick={() => {
              stopTimer();
              navigate(-1);
            }} sx={{ position: 'absolute', left: 20 }} />
            <Typography sx={{ 
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center'
              }}>Details</Typography>
          </Box>
          <StyledBox>
            <Box mt={5} sx={{ width: '100%' }}>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }}>Station Subscribed</Typography>
            </Box>
            <Box p={2} sx={{ position: 'relative', width: '90%', height: 140, margin: '10px 0', borderRadius: 2, boxShadow: 3, display: 'flex', alignItems: 'center' }}>
              <Typography variant="p" sx={{ fontSize: 20, fontWeight: 500, textAlign: 'center', position: 'absolute', top: 5, right: 0, left: 0 }}>{ location.state.item.name }</Typography>
              <Box mt={3} sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                <Typography sx={{ fontWeight: 500 }}>ACTIVE FROM</Typography>
                <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }} variant="span">{ timer }<sup style={{ fontSize: '14px' }}>seconds</sup></Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>MORE INFO</Typography>
                </Box>
              </Box>
              <Box mt={3} sx={{ flex: 1 }} onClick={() => {
                control === "Stop" ? stopTimer() : startTimer();
                setControl(control === "Stop" ? "Start" : "Stop");
              }}>
                <StyledButton click={() => null} value={ control } />
              </Box>
              
            </Box>
          </StyledBox>
      </Box>
  )
}

export default Detail