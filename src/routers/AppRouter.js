//1º ROUTER PRINCIPAL MANEJARÁ LAS RUTAS ANTES DE HACER LOGIN
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashBoardRoutes } from './DashBoardRoutes'


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                {/* Despues del login todas las rutas serán manejadas por este, no tiene sentido mostrar nada si no se hace login */}
                <Route path="/*" element={<DashBoardRoutes />} />
            </Routes>
        </BrowserRouter>

    )
}
