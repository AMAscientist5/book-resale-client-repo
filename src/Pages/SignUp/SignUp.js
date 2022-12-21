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

  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            console.log(data.name, data.email, "ami");
            saveUser(data.name, data.email, data.role);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, role = "buyer") => {
    console.log("savefunction", name, email, role);
    const user = { name, email, role };
    console.log(user);
    fetch("https://aradun-book-resale-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "ami confirmation");
        toast.success("User Created Successfully.");
        navigate("/");
      });
  };

  const handleLoginWithGoogle = (event) => {
    console.log(event);
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user, "third");
        // toast.success("User Created Successfully.");
        if (user?.uid) {
          saveUser(user?.displayName, user?.email);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleLoginWithGithub = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user, "four");
        // toast.success("User Created Successfully.");
        if (user?.uid) {
          saveUser(user?.displayName, user?.email);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero lg:py-12 bg-violet-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="text-center mb-1">
          <h4 className="border-bottom border-b-8 pb-2 w-24 text-2xl font-bold mx-auto mt-6">
            Sign Up
          </h4>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body py-1">
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

          <select className="w-24" {...register("role")}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <div className=" mt-6">
            {/* <button className="btn btn-primary w-full">Sign Up</button> */}
            <input
              className="btn btn-primary w-full"
              value="Sign Up"
              type="submit"
            />
          </div>
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <div className="text-center">
          <small>Create acoount with Google or Github account</small>
        </div>
        <div className="flex justify-items-center justify-center gap-x-4 p-3">
          <button
            onClick={handleLoginWithGoogle}
            className="w-40 font-bold h-11 bg-red-500 text-white"
            type="button"
          >
            Google
          </button>
          <button
            onClick={handleLoginWithGithub}
            className="w-40 h-11 font-bold bg-gray-500 text-white"
            type="button"
          >
            Github
          </button>
        </div>
        <div className="text-center my-3">
          <i className="mr-1">Already have an account?</i>
          <Link className="text-primary font-bold" to="/login">
            Login Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
