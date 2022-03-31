import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

//COMPONENTE PRINCIPAL
//==============================================================

//inicialmente extraemos los datos si no hay retorna lo siguiente
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const HeroesApp = () => {
    //devuelve un estado y una accion. userReducer recibe un state
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);//cada vez que el user cambia se almacena en localstorage



    return (
        //AuthContext.Provider:Provee informacion(value) a todos los componentes
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
