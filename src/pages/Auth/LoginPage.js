import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import loginSvg from "..//../assets/svg/Tablet login-amico.svg";
import { login } from "../../redux/action/authAction";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/apiFunctions";

const LoginPage = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(JSON.stringify(data))
      .then((res) => {
        setError("");
        dispatch(login(res.data));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div>
      <button
        className="back-button"
        onClick={() => {
          navigate(-1); // Go back to the previous page
        }}
      >
        {"<<"} Back
      </button>
      <div className="login-page">
        <div className="login-image">
          <img src={loginSvg} alt="Registration" />
        </div>
        <div className="login-form">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="error">Email is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="error">Invalid email address</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="error">Password is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="error">
                  Password must be at least 6 characters long
                </span>
              )}
            </div>

            {error !== "" ? (
              <p style={{ color: "red", marginLeft: 30 }}>{error} !!!</p>
            ) : null}

            <button className="btn btn-primary">Login</button>

            <div className="create-account-component">
              <span>
                Don't have an account?
                <Link to={"/sign-up"}>
                  <a href="/signup" className="create-account">
                    Create account
                  </a>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
