import React from "react";
import LoginScreen from "./component/login_screen";
import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Home from "./component/home";
import EmptyMsgBox from "./component/empty";
import Loader from "./component/loader";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        {/* <LoginScreen /> */}
        <Routes>
          <Route path="/" element={<LoginScreen />} exact />
          <Route path="/loader" element={<Loader />} exact />
          <Route
            element={
              <div>
                <Sidebar>
                  <Routes>
                    <Route path="/box" element={<Home />} />
                    <Route path="/*" element={<EmptyMsgBox />} />
                  </Routes>{" "}
                </Sidebar>
              </div>
            }
            path="/dash/*"
          />
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
};

export default App;
