import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/sigin/Signup';
import Dashboard from './components/Dashboard/dashboard';
import MyTask from './components/MyTask/mytask';
import Sidebar from './components/SideNavBar/sidenavbar';
import EditTask from './components/EditTask/EditTask';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard/*"
            element={
              <div className='flex flex-row'>
                <Sidebar />
                {/* This is the parent component which will hold the Outlet */}
                <EditTask />
                {/* <Dashboard /> */}
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

