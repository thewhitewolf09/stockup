import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RegistrationPage.scss";
import registrationSvg from "..//../assets/svg/Mobile login-rafiki.svg";
import { createUser } from "../../api/apiFunctions";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(JSON.stringify(data))
      .then((res) => {
        setError("");
        console.log(res.data);
        navigate("/log-in");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
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
      <div className="registration-page">
        <div className="registration-form">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="error">Full name is required</span>
              )}
            </div>
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
            <button className="btn btn-primary">Sign Up</button>

            <div className="create-account-component">
              <span>
                Already have an account?
                <Link to={"/log-in"}>
                  <span className="create-account">Log In!</span>
                </Link>
              </span>
            </div>
          </form>
        </div>
        <div className="registration-image">
          <img src={registrationSvg} alt="Registration" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
