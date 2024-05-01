import { useState } from 'react';
import './App.css';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import Dashboard from './Components/Dashboard';
import Department from './Components/Department';
import Employees from './Components/Employees';
import Hierarchy from './Components/Hierarchy';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useSelector } from 'react-redux';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    if (!token) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/signup"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signup />
        }
      />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/employees"
        element={
          isAuthenticated ? <Employees /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/departments"
        element={
          isAuthenticated ? <Department /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/org-hierarchy"
        element={
          isAuthenticated ? <Hierarchy /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;
