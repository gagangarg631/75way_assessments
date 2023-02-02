import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StyledBox from './StyledBox';
import StyledButton from './StyledButton';



const Disclaimer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ margin: '50px 0' }} alt="Not Available" height="150px" width="150px" src="logo.png" /> 
        <StyledBox sx={{
            
        }}>
          <Typography m={2} sx={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>Disclaimer</Typography>
          <Typography variant="p" sx={{ lineHeight: 2 }}>
          Technology is the application of knowledge for achieving practical goals in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2]: 117 [3] including both tangible tools such as utensils or machines
          </Typography>

          <StyledButton sx={{height: '50px', marginTop: 5 }} click={() => navigate('/stations')} value="I accept" />
        </StyledBox>
    </Box>
  )
}

export default Disclaimer