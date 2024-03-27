import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';
import React, { useState } from "react";
import axios from "axios";
// import 'swiper/css';
// import { Pagination } from 'swiper/modules';

export default function Register() {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        // "/api/v1/auth/register",
        {
          username,
          fullname,
          email,
          password,
        }
      );

      Swal.fire({
        icon: "success",
        title: '<span class="swal-title">Registration Successful</span>',
        text: "Welcome to EcoSen! You can now login with your credentials.",
      });

      console.log(response.data);
      setUserName("");
      setFullName("");
      setEmail("");
      setPassword("");

      naviagte("/login");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: '<span class="swal-title">Registration Failed</span>',
        text: "Failed to register. Please check your information and try again.",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-6">
              Register
            </h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label for="fullname">Fullname</label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value= {password} //menyertakan state dari password
                      placeholder=""
                      onChange={(e) => setPassword(e.target.value)} // Mengupdate state password saat nilai input berubah
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-[#04726C] hover:bg-[#04726C] text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
