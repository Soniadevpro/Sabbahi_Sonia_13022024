import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home";
import Login from "./Views/Login";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import UserAccount from "./Views/UserAccount";
import ProtectedRoute from "./Redux/features/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />} />
        <Route path="/user-account" element={<UserAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
