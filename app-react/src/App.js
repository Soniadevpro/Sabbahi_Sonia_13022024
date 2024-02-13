import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home";
import Login from "./Views/Login";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
