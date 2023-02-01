import { Box, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import StyledBox from './StyledBox';
import StyledButton from './StyledButton';

const Detail = () => {
  return (
      <Box>
          <Box mt={10}>
            <ArrowBack sx={{ position: 'absolute', left: 20 }} />
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
            <Box p={2} sx={{ width: '90%', height: 120, margin: '10px 0', borderRadius: 2, boxShadow: 3, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Typography sx={{ fontWeight: 500 }}>ACTIVE FROM</Typography>
                <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }} variant="span">9<sup style={{ fontSize: '14px' }}>seconds</sup></Typography>
                
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>MORE INFO</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <StyledButton value="Stop" />
              </Box>
              
            </Box>
          </StyledBox>
      </Box>
  )
}

export default Detail