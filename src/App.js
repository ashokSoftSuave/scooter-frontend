import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/header';
import Sidebar from './components/SideNavBar/sidenavbar';
import Dashboard from './components/Dashboard/dashboard';
import Signup from './components/sigin/Signup.jsx';
import { Navigate } from 'react-router-dom';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard/*"
            element={
                <div className="flex flex-col">
                  <Header
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
                  />
                  <div className="flex flex-row w-full">
                    <Sidebar isMenuOpen={isMenuOpen} />
                    <Dashboard />
                  </div>
                </div>
            }
          />
          <Route 
            path="/" 
            element={
              token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;