import React, { useContext } from "react";
import LoginScreen from "./component/login_screen";
import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Home from "./component/home";
import EmptyMsgBox from "./component/empty";
import Loader from "./component/loader";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./theme/theme_provider";
import themeContext from "./theme/theme_context";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        {/* <LoginScreen /> */}
        <ThemeProvider>
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
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
