import { Alert, Typography, Box } from "@mui/material";
import StyledAlert from "./styles/StyledAlert";

const AlertMessage = ({ severity, message, show }) => {
    return (
        <Box sx={{ position: "absolute", bottom: 50, width: "100%" }}>
            <StyledAlert in={show}>
                <Alert severity={severity}>
                    <Typography sx={{ fontSize: 18 }}>{message}</Typography>
                </Alert>
            </StyledAlert>
        </Box>
    );
};

export default AlertMessage;
