import { Navigate } from "react-router-dom";
import useAuth from "./Auth";
import { useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }
    
    if (children.type.name === 'Detail' && !location.state) {
        return <Navigate to="/stations" />
    }

    return children;
};

export default ProtectedRoute;