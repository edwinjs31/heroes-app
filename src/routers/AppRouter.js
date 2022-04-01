//1º ROUTER PRINCIPAL MANEJARÁ LAS RUTAS ANTES DE HACER LOGIN
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashBoardRoutes } from './DashBoardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                {/* <Route path="/login" element={<LoginScreen />} /> */}

                {/* Despues del login todas las rutas serán manejadas PrivateRoute, quien validará si está logueado */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashBoardRoutes /> {/*Estas rutas hijas serán enviadas como 'props' a 'PrivateRoute'*/}
                    </PrivateRoute>
                } />

                {/* <Route path="/*" element={<DashBoardRoutes />} /> */}
            </Routes>
        </BrowserRouter>

    )
}
