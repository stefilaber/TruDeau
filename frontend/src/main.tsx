import React from 'react'
import ReactDOM from 'react-dom/client'
import EditTodosPage from './editTodosPage/EditTodosPage.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./theme.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EditTodosPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
