import StyledBox from "./StyledBox";
import {
    Box,
    Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography,
} from "@mui/material";
import { Search, Image, LocalGasStation } from "@mui/icons-material";

const Stations = () => {
    return (
        <Box variant="div">
            <Typography mt={10} sx={{ 
              fontSize: 20,
              fontWeight: 500,
              textAlign: 'center'
             }}>Select Station</Typography>
            <StyledBox>
                <Box
                    mt={5}
                    pl={1}
                    bgcolor="#C5C5C5"
                    sx={{
                        height: 70,
                        width: "90%",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 2,
                    }}
                >
                    <Search sx={{ color: '#808080' }}></Search>
                    <Input
                        disableUnderline
                        placeholder="Search by iD, Name, City"
                        fullWidth
                        sx={{
                            height: "100%",
                            paddingLeft: "10px",
                            fontSize: 18,
                        }}
                    />
                </Box>
                <List
                    sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                        height: "100%",
                        overflow: "scroll",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <LocalGasStation sx={{ color: "red" }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Photos"
                            secondary="Jan 9, 2014"
                        />
                    </ListItem>
                    
                </List>
            </StyledBox>
        </Box>
    );
};

export default Stations;
