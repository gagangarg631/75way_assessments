import { Box, Typography } from "@mui/material";
import StyledBox from "../../styles/StyledBox";
import StyledButton from "../../styles/StyledButton";
import StyledDetailBox from "../../styles/StyledDetailBox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Header";

const Detail = () => {
    const [timer, setTimer] = useState(Math.ceil(Math.random() * 20));
    const [timerID, setTimerID] = useState();
    const location = useLocation();
    const [control, setControl] = useState("Stop");

    const startTimer = () => {
        const id = setInterval(() => {
            setTimer((prevTime) => prevTime + 1);
        }, 1000);
        setTimerID(id);
    };

    const stopTimer = () => {
        clearInterval(timerID);
    };

    useEffect(() => {
        startTimer();
    }, []);

    return (
        <Box sx={{ paddingTop: 10 }}>
            <Box>
                <Header
                    pageTitle="Details"
                    stopTimer={stopTimer}
                    isBack={true}
                />
            </Box>
            <StyledBox>
                <Box mt={5} sx={{ width: "100%" }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                        Station Subscribed
                    </Typography>
                </Box>

                <StyledDetailBox>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: 20,
                            fontWeight: 500,
                            textAlign: "center",
                            position: "absolute",
                            top: 5,
                            right: 0,
                            left: 0,
                        }}
                    >
                        {location.state.item.name}
                    </Typography>
                    <Box
                        mt={3}
                        sx={{
                            flex: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            height: "100%",
                        }}
                    >
                        <Typography sx={{ fontWeight: 500 }}>
                            ACTIVE FROM
                        </Typography>
                        <Box>
                            <Typography
                                sx={{ fontWeight: "bold", fontSize: "30px" }}
                                variant="span"
                            >
                                {timer}
                                <sup style={{ fontSize: "14px" }}>seconds</sup>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontWeight: 500, fontSize: "16px" }}
                            >
                                MORE INFO
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        mt={3}
                        sx={{ flex: 1 }}
                        onClick={() => {
                            control === "Stop" ? stopTimer() : startTimer();
                            setControl(control === "Stop" ? "Start" : "Stop");
                        }}
                    >
                        <StyledButton click={() => null} value={control} />
                    </Box>
                </StyledDetailBox>
            </StyledBox>
        </Box>
    );
};

export default Detail;
