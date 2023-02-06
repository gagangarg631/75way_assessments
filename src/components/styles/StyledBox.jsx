import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)({
    height: '75vh',
    width: '95vw',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    boxShadow: '0px -4px 5px rgba(50, 50, 50, 0.75)'
})

export default StyledBox;