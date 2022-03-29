import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate= useNavigate();
    //'navigate' permite redirecionar una vez logueado, con 'replace', no pueva volver a la ruta anterior
    const handleLogin = () => navigate('/',{replace: true});
    return (
        <div>
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
