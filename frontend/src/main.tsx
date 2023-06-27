import React from 'react'
import ReactDOM from 'react-dom/client'
import EditTodosPage from './editTodosPage/EditTodosPage.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./theme.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.tsx';
import ManageCategories from './categoriesPage/ManageCategories.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/manage" element={<EditTodosPage />} />
                <Route path="/category" element={<ManageCategories />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
