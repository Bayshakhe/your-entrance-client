import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import loginAnimation from "../../../public/login.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // const user = result.user
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
        console.log(result.user);
        setError("");
      })
      .catch((err) => setError(err.message));
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Player
            autoplay
            loop
            src={loginAnimation}
            style={{ height: "400px", width: "400px" }}
          ></Player>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-xl ">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl font-bold text-center mb-5">Login now!</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          
          <div onClick={handleGoogleLogin} className="form-control px-8">
              <button className="btn btn-outline">Google Login</button>
            </div>
            <label className="label">
              <p className="text-sm px-8 mb-5">
                New at YourEntrance? Please &nbsp;
                <Link
                  to="/register"
                  className="link-hover text-primary font-semibold underline"
                >
                  Register
                </Link>
              </p>
            </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
