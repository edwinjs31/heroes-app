import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from "../../types/types";


export const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    //'navigate' permite redirecionar una vez logueado, con 'replace', no pueva volver a la ruta anterior
    const handleLogin = () => {
        //enviamos la accion dentro del dispatch
        dispatch({
            type: types.login,
            payload: { name: 'Edwin' }
        });

        //redireccionamos
        navigate('/', { replace: true });
    };

    return (
        <div className='container'>
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
