import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginAnimation from "../../../public/login.json";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {createUser, updateUser, googleLogin} = useContext(AuthContext)
//   console.log(user)

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(() => {
        // const user = result.user
        updateUser(data.name, data.photo)
        .then(result => {
            console.log(result)
            setError('')
        })
        .catch(err => setError(err.message))
    })
    .catch(err => setError(err.message))
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
            <h2 className="text-4xl font-bold text-center mb-5">
              Please Register!
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photo", { required: true })}
                type="url"
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
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
                Already have an account? Please &nbsp;
                <Link
                  to="/login"
                  className="link-hover text-primary font-semibold underline"
                >
                  Login
                </Link>
              </p>
            </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
