import React from "react";
import LoginScreen from "./component/login_screen";
import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Home from "./component/home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <LoginScreen /> */}

        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>{" "}
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
