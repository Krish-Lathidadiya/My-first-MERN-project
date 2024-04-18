import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const setData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      const res_data = await response.json();
      console.log("response data", res_data);

      if (response.ok) {
        toast.success("Login successful");
        storeTokenInLS(res_data.token);
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">
        <div className="md:w-1/2 lg:w-1/3">
          <img src="./images/login.avif" alt="" className="w-full h-auto rounded-md shadow-md" />
        </div>
        <div className="md:w-1/2 lg:w-2/3 px-4 md:px-8 mt-8 md:mt-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Login Form</h1>
          <form onSubmit={handleSubmit} className="max-w-lg">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={setData}
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter email address"
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={setData}
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                autoComplete="off"
                required
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
