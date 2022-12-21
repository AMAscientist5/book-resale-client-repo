import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, providerLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleLoginWithGithub = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero bg-violet-200 lg:py-12">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="text-center mb-1">
          <h4 className="border-bottom border-b-8 pb-2 w-24 text-2xl font-bold mx-auto mt-6">
            Login
          </h4>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body mt-2">
          <input
            {...register("email", {
              required: "Email Address is required",
            })}
            type="email"
            placeholder="email"
            className=""
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
              },
            })}
            type="password"
            placeholder="password"
            className=""
          />
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <Link>
            <small className="text-primary">forgot password?</small>
          </Link>

          <div className=" mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          {loginError && <p className="text-red-600">{loginError}</p>}
        </form>
        <div className="text-center">
          <small>Login easily with your google or Github</small>
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
          <i className="mr-1">New to the site?</i>

          <Link className="text-primary font-bold" to="/signup">
            Sign Up Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
