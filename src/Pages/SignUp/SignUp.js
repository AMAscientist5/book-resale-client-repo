import "./SignUp.css";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, providerLogin } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleLoginWithGithub = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <h4 className="border-bottom border-b-8 pb-2 w-24 mx-auto mt-6">
          Sign Up
        </h4>
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body mt-2">
          <input
            {...register("name", {
              required: "Name is Required",
            })}
            type="text"
            name="name"
            placeholder="name"
            className=""
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            placeholder="email"
            className=""
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must have uppercase, number and special characters",
              },
            })}
            type="password"
            placeholder="password"
            className=""
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
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
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <div className="text-center">
          <small>Login easily with your facebook or google account</small>
        </div>
        <div className="flex justify-items-center justify-center gap-x-4 p-3">
          <button
            onClick={handleLoginWithGoogle}
            className="w-40 h-11 bg-red-500 text-white"
            type="button"
          >
            Google
          </button>
          <button
            onClick={handleLoginWithGithub}
            className="w-40 h-11 bg-gray-500 text-white"
            type="button"
          >
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
