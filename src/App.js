import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/sigin/Signup";
import Dashboard from "./components/Dashboard/dashboard";
import MyTask from "./components/MyTask/mytask";
import Sidebar from "./components/SideNavBar/sidenavbar";
import Header from "./components/Header/header";

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  if(!localStorage.getItem('token')) {
    window.location.location = '/login';
  }


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
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={
                  () => setIsMenuOpen(!isMenuOpen)
                }/>
                <div className="flex flex-row w-full">
                  <Sidebar isMenuOpen={isMenuOpen} />
                  <Dashboard />
                </div>
              </div>
            }
          >
            <Route path="my-task" element={<MyTask />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
