import { React, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Stylesheets/login-signup.css";

function Signup() {
  const navigate = useNavigate();
  const email = useRef();
  const name = useRef();
  const password = useRef();
  const confirm_password = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/createuser", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.authToken);
        navigate("/login");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pattern-bg">
      <div className="login-signup-form bg-white text-center my-4 p-4 w-4/5 md:w-3/5 lg:w-2/5">
        <h3 className="text-3xl font-medium">Sign Up</h3>
        <form onSubmit={submitHandler}>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="email">Email-id:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="email"
              id="email"
              placeholder="jhon@gmail.com"
              ref={email}
            />
          </div>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="name">Name:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="text"
              id="name"
              placeholder="Jhon Doe"
              ref={name}
            />
          </div>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="password">Password:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="password"
              id="password"
              placeholder="********"
              ref={password}
            />
          </div>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="password"
              id="confirm_password"
              placeholder="********"
              ref={confirm_password}
            />
          </div>
          <button
            className="login-signup-btn px-4 py-2 mx-auto w-4/5 md:w-3/4 lg:w-3/5
         font-medium rounded"
          >
            Sign-Up
          </button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="move-text" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Signup };
