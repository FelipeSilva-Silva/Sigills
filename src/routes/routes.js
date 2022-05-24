import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Credit from "../pages/Credit";
import Setting from "../pages/Setting";
import Report from "../pages/Report";


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Dashboard />} path='/Dashboard' />
                <Route element={<Account />} path='/Account' />
                <Route element={<Credit />} path='/Credit' />
                <Route element={<Setting />} path='/Settings' />
                <Route element={<Report />} path='/Report' />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;