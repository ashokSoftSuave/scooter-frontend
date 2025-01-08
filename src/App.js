import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/sigin/Signup';
import Dashboard from './components/Dashboard/dashboard';
import MyTask from './components/MyTask/mytask';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="my-task" element={<MyTask />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

