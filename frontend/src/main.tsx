import React from 'react'
import ReactDOM from 'react-dom/client'
import EditTodosPage from './editTodosPage/EditTodosPage.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./theme.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EditTodosPage />
  </React.StrictMode>,
)
