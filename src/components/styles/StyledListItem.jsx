import { styled, ListItem } from '@mui/material';

const StyledListItem = styled(ListItem)({
    "&:hover": {
        backgroundColor: 'gray',
        color: 'white',
        borderRadius: 10
    }
})

export default StyledListItem;