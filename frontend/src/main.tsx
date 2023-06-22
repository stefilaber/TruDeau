import React from 'react';
import ReactDOM from 'react-dom/client';
import EditTodosPage from './editTodosPage/EditTodosPage.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Navbar.tsx';
import LandingPage from './landingPage/LandingPage.tsx';
import "./theme.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CustomNavbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/manage" element={<EditTodosPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
