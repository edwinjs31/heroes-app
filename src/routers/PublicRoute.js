import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext"

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    //si está loquedado redirecciona al home, si no al login
    return user.logged ? <Navigate to='/' /> : children;

}
