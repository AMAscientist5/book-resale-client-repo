import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <h4 className="border-bottom border-b-8 pb-2 w-24 mx-auto mt-6">
          Sign Up
        </h4>
        <form className="card-body mt-2">
          <input type="text" name="name" placeholder="name" className="" />
          <input type="email" placeholder="email" className="" />
          <input type="password" placeholder="password" className="" />
          <select className="w-24" name="" id="">
            <option value="Select" disabled selected>
              Select One
            </option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <div className=" mt-6">
            <button className="btn btn-primary w-full">Sign Up</button>
          </div>
        </form>
        <div className="text-center">
          <small>Login easily with your facebook or google account</small>
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
          <i className="mr-1">Already have an account?</i>

          <Link to="/login">Login Now!</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
