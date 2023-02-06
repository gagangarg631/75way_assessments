import { Button } from '@mui/material';

const StyledButton = ({value, click={}, sx={}}) => {
    return <Button onClick={click} variant="contained" sx={{
        ...sx,
        borderRadius: 20,
        paddingLeft: 7,
        paddingRight: 7,
    }}>
        { value }
    </Button>
}

export default StyledButton;