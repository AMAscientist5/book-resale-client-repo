import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <h4 className="border-bottom border-b-6 pb-2 w-16 mx-auto mt-6">
          Login
        </h4>
        <form className="card-body mt-2">
          <input type="email" placeholder="email" className="" />
          <input type="password" placeholder="password" className="" />
          <p>forgot password?</p>
          <div className=" mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>
        <div className="text-center">
          <small>Login easily with your google or Github account</small>
        </div>
        <div className="flex justify-items-center justify-center gap-x-4 p-3">
          <button className="w-40 h-11 bg-red-500 text-white" type="button">
            Google
          </button>
          <button className="w-40 h-11 bg-gray-500 text-white" type="button">
            Github
          </button>
        </div>
        <div className="text-center my-3">
          <i className="mr-1">New to the site?</i>

          <Link to="/signup">Sign Up Now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
