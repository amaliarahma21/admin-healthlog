import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';
import { Link } from "react-router-dom";
// import 'swiper/css';
// import { Pagination } from 'swiper/modules';
import React, { useState } from "react";
import axios from "axios";

import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://10.10.9.158/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);
      setEmail("");
      setPassword("");

      localStorage.setItem("token", response.data.token);

      navigate("/");
      Swal.fire({
        icon: "success",
        title: '<span class="swal-title">Login Successful</span>',
        text: "Welcome back!",
      });
    } catch (error) {
      console.log("Failed to login!", error);
      Swal.fire({
        icon: "error",
        title: '<span class="swal-title">Login Failed!</span>',
        text: "Invalid email or password.",
      });
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 w-50 h-50 i justify-around items-center hidden">
        <div>
            <img src="public/assets/auth/login-image.jpg" alt="" srcset="" />
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-7 ">
            LogIn
          </h1>
          {/* <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p> */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-[#04726C] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          
          <span className="text-sm ml-2 hover:text-[#04726C] cursor-pointer">
            <Link to="/register">Belum mempunyai akun? daftar</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
