import StyledBox from './styles/StyledBox';
import StyledSearchBox from './styles/StyledSearchBox';
import StyledList from './styles/StyledList';
import StyledListItem from './styles/StyledListItem';
import {
    Box,
    Input,
    ListItemAvatar,
    ListItemText,
    Typography,
    Fade
} from "@mui/material";
import { Search, LocalGasStation, DriveEta } from "@mui/icons-material";
import { allStations } from '../Services';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import Header from './Header';

const Stations = () => {
    const [stations, setStations] = useState([]);
    const navigate = useNavigate();

    const [showStations, setShowStations] = useState(false);

    const [storeStations, setStoreStations] = useState([]);

    const inputChange = (el) => {
        let value = el.target.value;
                            
        if (value === ""){
            setStations(storeStations);
        }else{
            const searchedSt = [];
            storeStations.forEach((item, index) => {
                let strInd = item.name.toLowerCase().indexOf(value.toLowerCase());
                if (strInd !== -1) {
                    searchedSt.push({
                        ...item,
                        meta: {
                            val: value,
                            ind: strInd,
                        }
                    });
                }
            });
            
            setStations(searchedSt);
        }
    }

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
            <Header pageTitle="Select Station" />
            <StyledBox>
                <StyledSearchBox>
                    <Search sx={{ color: '#808080' }}></Search>
                    <Input
                        disableUnderline
                        placeholder="Search by iD, Name, City"
                        fullWidth
                        onChange={ inputChange }
                        sx={{
                            height: "100%",
                            paddingLeft: "10px",
                            fontSize: 18,
                        }}
                    />
                </StyledSearchBox>
                <Fade in={showStations}>
                <StyledList>
                    {
                        stations.map((item, index) => {

                            item.name = item.name.slice(0,1).toUpperCase() + item.name.slice(1);
                            const { val, ind } = item.meta ? item.meta : {};

                            return (
                                <StyledListItem 
                                    key={ index } 
                                    onClick={() => navigate('/details', { state: { item } })}
                                >
                                    <ListItemAvatar>
                                        <LocalGasStation sx={{ color: "red" }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={ 
                                            <>
                                            <span>{ item.meta ? item.name.slice(0, ind) : "" }</span>
                                            <span style={{ backgroundColor: '#C5C5C5' }}>{ item.meta ?  item.name.slice(ind, ind + val.length) : "" }</span>
                                            <span>{ item.meta ? item.name.slice(ind + val.length) : "" }</span>
                                            <Typography>{ !item.meta ? item.name : "" }</Typography>
                                            </>
                                        }
                                        secondary={ item.pantone_value }
                                    />
                                    <DriveEta />
                                </StyledListItem>
                            )
                        })
                    }
                </StyledList>
                </Fade>
            </StyledBox>
        </Box>
    );
};

export default Stations;
