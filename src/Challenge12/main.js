import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import App from './App'
import { MainApp } from './MainApp'
import { TodoApp } from './TodoApp'
import PrivateRoute from './components/PrivateRoute';
import Login from './Login'
import Home from './Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute children={<Home />} />}>
            <Route path="/" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
)