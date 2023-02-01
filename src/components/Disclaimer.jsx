import { Box, Button, Typography } from '@mui/material';
import StyledBox from './StyledBox';



const Disclaimer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ margin: '50px 0' }} height="100px" width="100px" src="" /> 
        <StyledBox sx={{
            
        }}>
          <Typography m={2} sx={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>Disclaimer</Typography>
          <Typography variant="p" sx={{ lineHeight: 2 }}>
          Technology is the application of knowledge for achieving practical goals in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2]: 117 [3] including both tangible tools such as utensils or machines
          </Typography>
          <Button variant="contained" sx={{ margin: '20px 0', borderRadius: 10, width: '50%', height: '50px' }}>
            <Typography>I accept</Typography>
          </Button>
        </StyledBox>
    </Box>
  )
}

export default Disclaimer