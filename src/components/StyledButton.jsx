import { styled, Button } from '@mui/material';

const StyledButton = ({value}) => {
    return <Button variant="contained" sx={{
        borderRadius: 20,
        paddingLeft: 7,
        paddingRight: 7,
    }}>
        { value }
    </Button>
}

export default StyledButton;