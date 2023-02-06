import { Alert, Typography, Fade, Box } from '@mui/material';

const AlertMessage = ({ severity, message, show }) => {
  return (
    <Box sx={{ position: 'absolute', bottom: 50, width: '100%' }}>
      <Fade sx={{ width: '70%', margin: 'auto', borderRadius: 10, display: 'flex', alignItems: 'center' }} in={ show }>
      <Alert severity={ severity }>
          <Typography sx={{ fontSize: 18 }}>{ message }</Typography>
      </Alert>
      </Fade>
    </Box>
  )
}

export default AlertMessage;