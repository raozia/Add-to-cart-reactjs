/* eslint-disable no-useless-assignment */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const userdetails = {
    username: "",
    email: "",
    password: "",
  };
  const [data, setdata] = useState(userdetails);
  const navigate = useNavigate();
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data.username.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === ""
    ) {
      alert("Please Enter Credentials");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      alert("Signup Success");
      navigate("/login");
    }
  };
  return (
    <div className="bg-white shadow-2xl max-w-120 w-full mx-auto p-5 rounded-2xl mt-10">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <h1 className="text-2xl font-bold text-center">SignUp</h1>
          <div className="mt-2">
            <label htmlFor="username" className="text-2xl font-semibold mt-2">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={handleInput}
              placeholder="username"
              className="bg-white border border-gray-300 w-full rounded-md p-1 mt-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-2xl font-semibold ">
              Email:
            </label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={handleInput}
              placeholder="email"
              className="bg-white border border-gray-300 w-full rounded-md p-1 mt-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-2xl font-semibold">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="password"
              className="bg-white border border-gray-300 w-full rounded-md p-1 mt-2"
            />
          </div>
          <div>
            <button
              //   onClick={onSignup}
              className="bg-blue-400 text-white mt-3 px-2 py-1 w-full rounded-md"
            >
              Sign Up
            </button>
          </div>
          <p>
            Already have account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
