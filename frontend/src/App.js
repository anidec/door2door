import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import RegisterWorker from "./components/RegisterWorker";
import LogOut from "./components/LogOut";
import Search from "./components/Search";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { initialState, reducer } from "./reducer/UseReducer";
export const UserContext = createContext();
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<Register />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/registerWorker" element={<RegisterWorker />}></Route>
      <Route path="/LogOut" element={<LogOut />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
};
function App() {
  // 1.contextAPI

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
