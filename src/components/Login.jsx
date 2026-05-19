/* eslint-disable no-useless-assignment */
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { setAuth } from "./Auth";
import { users } from "../auth-shoping-card";

const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [msg, setmsg] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const getDetails = JSON.parse(localStorage.getItem("user"));
    const getDetails = users;
    // console.log(getDetails);
    getDetails.map((curValue) => {
      //   console.log(curValue.password);
      let storeEmail = curValue.email;
      let storePassword = curValue.password;

      if (storeEmail == data.email && storePassword == data.password) {
        setAuth();
        alert("Login Success");
        const getData = JSON.parse(localStorage.getItem("user") || "[]");
        let arr = [];
        arr = [...getData];
        arr.push(data);
        localStorage.setItem("user", JSON.stringify(arr));
        navigate("/profile");
      } else {
        return setmsg("Invalid email or password");
      }
    });
  };
  return (
    <div className="bg-white shadow-2xl max-w-120 w-full mx-auto p-5 rounded-2xl mt-10">
      <p>{msg}</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="mt-2">
          <div className="mt-3">
            <div>
              <label htmlFor="email" className="text-2xl font-semibold mt-2">
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
              <label htmlFor="password" className="text-2xl font-semibold mt-2">
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
              <button className="bg-blue-400 text-white mt-3 px-2 py-1 w-full rounded-md">
                Login
              </button>
            </div>
            <p>
              Create New Account.
              <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
