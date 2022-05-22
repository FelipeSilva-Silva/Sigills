import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Dashboard />} path='/Dashboard'/>
                <Route element={<Setting />} path='/Settings'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;