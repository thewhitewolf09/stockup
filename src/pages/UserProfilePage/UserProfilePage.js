import React, { useState } from "react";
import "./UserProfilePage.scss";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import prifilePic from "..//..//assets/images/profile.jpg";
import prifileSvg from "..//..//assets/svg/Personal data-bro.svg";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import {
  logoutUser,
  updateUser,
  updateUserPassword,
} from "../../api/apiFunctions";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.user);
  
  const [userData, setUserData] = useState(user.user);

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedUser({ ...userData });
  };

  const handleInputChange = (e) => {
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveClick = () => {
    const data = {
      userId: userData._id,
      updatedUser: updatedUser,
    };
    updateUser(data)
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data));
        setUserData(updatedUser);
        setEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePasswordChange = (e) => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Logic for changing the password

    console.log(userData._id);

    const data = {
      userId: userData._id,
      password: password,
    };

    updateUserPassword(data)
      .then((res) => {
        setPasswordError("");
        setPasswordSuccess(res.data.message);
        setPassword({
          currentPassword: "",
          newPassword: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setPasswordError(err.response.data.message);
      });
  };

  const handleLogout = () => {
    // Logic for logging out
    logoutUser()
      .then((res) => {
        console.log(res);
        dispatch(logout());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="user-profile-page">
        <div className="profile-header">
          <h2>User Profile</h2>
        </div>
        <div className="profile-details-container">
          <div>
            <div className="profile-details">
              {editing ? (
                <div className="edit-form">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name || ""}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email || ""}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="profilePhoto">Profile Picture:</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </div>
              ) : (
                <div className="profile-view">
                  <div className="profile-picture">
                    <img src={prifilePic} alt="Profile" />
                  </div>
                  <div className="profile-info">
                    <p>
                      <strong>Name:</strong> {userData.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {userData.email}
                    </p>
                    <button
                      className="edit-profile-btn"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="account-settings">
              <form onSubmit={handlePasswordSubmit}>
                <label htmlFor="currentPassword">Current Password:</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={password.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="newPassword">New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={password.newPassword}
                  onChange={handlePasswordChange}
                  required
                />

                {passwordError !== "" ? (
                  <p style={{ color: "red", marginLeft: 30 }}>
                    {passwordError} !!!
                  </p>
                ) : null}
                {passwordSuccess !== "" ? (
                  <p style={{ color: "green", marginLeft: 30 }}>
                    {passwordSuccess} !!!
                  </p>
                ) : null}
                <button type="submit">Change Password</button>
              </form>
            </div>

            <div className="logout">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className="profile-svg">
            <img src={prifileSvg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfilePage;
