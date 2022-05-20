import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Dashboard />} path='/Dashboard' exact />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;