import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import GoogleIco from "../assets/google.png";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dash/home");
    }
  }, []);

  const handleGoogleLogin = () => {
    // Redirect to Google login URL
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/loader";
  };
  return (
    <main className="background_color screen">
      <nav className="flex justify-center items-center py-4 border-b border-[#25262B]">
        <img src={Logo} alt="" className="h-8" />
      </nav>
      <section className="flex-1 h-full flex justify-center items-center">
        <div className="login_container sm:w-[460px] sm:h-[312px] rounded-2xl  border border-[#343A40] flex flex-col flex-wrap justify-around items-center px-4 py-2 sm:px-8 sm:py-4">
          <div className="contents">
            <h3 className="text-lg py-4 font-semibold text-white">
              Create a new account
            </h3>
            <button
              className="flex border items-center justify-center  text-[#CCCCCC]  border-[#707172] font-medium rounded px-10 sm:min-w-80  w-full h-12 mb-1 whitespace-nowrap"
              onClick={handleGoogleLogin}
            >
              <img src={GoogleIco} alt="" className="h-6 pr-3" />
              <p>Sign Up with Google</p>
            </button>
          </div>

          <div className="contents">
            <button className="flex mt-10 mb-4 items-center justify-center  text-white font-medium rounded px-9 py-3 login_button">
              <p>Create an Account</p>
            </button>
            <p className="text-[#909296]">
              Already have an account?{" "}
              <span className="text-[#C1C2C5] font-medium">Sign In</span>
            </p>
          </div>
        </div>
      </section>
      <footer className="flex justify-center text-sm p-0.5 bg-[#121212] border-t border-[#25262B]">
        <p className="text-[#5C5F66] ">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default LoginScreen;
