import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)({
    height: '75vh',
    width: '90vw',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    boxShadow: '1px 8px 8px 8px gray'
})

export default StyledBox;