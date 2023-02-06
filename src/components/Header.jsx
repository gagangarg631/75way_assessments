import { Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { logout } from "../Services";
import useAuth from "../Auth";

const Header = ({ pageTitle, stopTimer, isBack }) => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            {isBack ? (
                <ArrowBack
                    onClick={() => {
                        stopTimer();
                        navigate(-1);
                    }}
                    sx={{ position: "absolute", left: 20 }}
                />
            ) : (
                ""
            )}
            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                {pageTitle}
            </Typography>
            <Typography
                onClick={() => {
                    const isLoggedOut = logout();
                    setIsAuthenticated(false);
                    if (isLoggedOut) {
                        navigate("/");
                    }
                }}
                sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    position: "absolute",
                    right: 20,
                    "&:hover": { cursor: "pointer" },
                }}
            >
                Logout
            </Typography>
        </Box>
    );
};

export default Header;
