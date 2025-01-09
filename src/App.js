import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/dashboard";
import Signup from "./components/sigin/Signup.jsx";
import Edit from "./components/Edit/Edit.jsx";
import Layout from "./components/Layout/layout.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          element={
            <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="edit/:ptsId" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
