import StyledBox from "./StyledBox";
import {
    Box,
    Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Fade
} from "@mui/material";
import { Search, LocalGasStation } from "@mui/icons-material";
import { allStations } from '../Services';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

const Stations = () => {
    const [stations, setStations] = useState([]);
    const navigate = useNavigate();

    const [showStations, setShowStations] = useState(false);

    const [storeStations, setStoreStations] = useState([]);

    useEffect(() => {
        setTimeout(() => setShowStations(true), 500);
        async function loadData() {
            const st = await allStations();
            setStations(st.data);
            setStoreStations(st.data);
        }
        
        loadData();
    }, []);

    return (
        <Box variant="div" sx={{ paddingTop: 10 }}>
            <Typography sx={{ 
              fontSize: 20,
              fontWeight: 500,
              textAlign: 'center',
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
                        onChange={(el) => {
                            let value = el.target.value;
                            
                            if (value === ""){
                                setStations(storeStations);
                            }else{
                                setStations(storeStations.filter(item => {
                                    return item.name.toLowerCase().startsWith(value.toLowerCase());
                                }))
                            }
                        }}
                        sx={{
                            height: "100%",
                            paddingLeft: "10px",
                            fontSize: 18,
                        }}
                    />
                </Box>
                <Fade in={showStations}>
                <List
                    sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                        height: "100%",
                        overflow: "scroll",
                    }}
                >
                    {
                        stations.map((item, index) => {

                            item.name = item.name.slice(0,1).toUpperCase() + item.name.slice(1);

                            return (
                                <ListItem key={ index } onClick={() => navigate('/details', { state: { item } })}>
                                    <ListItemAvatar>
                                        <LocalGasStation sx={{ color: "red" }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={ item.name }
                                        secondary={ item.pantone_value }
                                    />
                                </ListItem>
                            )
                        })
                    }
                </List>
                </Fade>
            </StyledBox>
        </Box>
    );
};

export default Stations;
