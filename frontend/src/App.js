import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import RegisterWorker from "./components/RegisterWorker";
import Search from './components/Search'

import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/registerWorker" element={<RegisterWorker />}></Route>
      </Routes>
    </>
  );
}

export default App;
