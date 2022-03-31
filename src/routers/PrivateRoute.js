import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const {pathname, search} = useLocation();

    //guardamos el ultimo path, al volver a loguearse iniciará desde ese ultimo punto.
    //search es un queryString
    localStorage.setItem('lastPath', pathname + search);


    //si está logueado devuelve todas las rutas privadas, si no redirecciona al login
    return user.logged ? children : <Navigate to='/login' />

}
