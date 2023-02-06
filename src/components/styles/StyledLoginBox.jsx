import { styled, Box } from '@mui/material';
import theme from '../../theme';

const StyledLoginBox = styled(Box)({
    height: '100vh',
    [theme.breakpoints.up("sm")]: {
        width: '40vw'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingTop: 100,
    backgroundColor: 'white',
    margin: 'auto',
})

export default StyledLoginBox;