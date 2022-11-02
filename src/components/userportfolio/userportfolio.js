import React from 'react';
import { useState, useEffect } from 'react';
import "./userportfolio.css"
import { AiOutlinePlusCircle, AiOutlineCloseCircle, AiFillCaretDown } from "react-icons/ai"

const EditUser = () => {
    let edituserEl = document.getElementById("edit-user")
    let crossEl = document.getElementById("cross")
    let plusEl = document.getElementById("plus")
    edituserEl.style.display = "flex"
    crossEl.style.display = "block"
    plusEl.style.display = "none"
}

const closeEditUser = () => {
    let edituserEl = document.getElementById("edit-user")
    let crossEl = document.getElementById("cross")
    let plusEl = document.getElementById("plus")
    edituserEl.style.display = "none"
    crossEl.style.display = "none"
    plusEl.style.display = "block"
}
const UserData = (props) => {

    const { userdata } = props;

    return (
        <div className='userportfolio-user-container'>
            <span>{userdata.user_name}</span>
            <span>{userdata.quantity}</span>
            <span>{userdata.portfolio_value}</span>
        </div>
    );
}
const UserPortfolio = () => {

    const [user, setUser] = useState({
        user_name: "",
        quantity: "",
        portfolio_value: ""
    });
    const [userdata, setUserdata] = useState();

    const getPortFolioData = async () => {
        const res = await fetch("http://localhost:5000/api/v1/userportfolio", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const res_data = await res.json();
        setUserdata(res_data.userportfolio);
    }

    useEffect(() => {
        getPortFolioData();
    });

    let name, value;
    function handleChange(event) {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if ((user.user_name !== "") && (user.quantity !== "") && (user.portfolio_value !== "")) {
            const res = await fetch("http://localhost:5000/api/v1/postuserportfolio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            const res_data = await res.json();
            if (!res_data) {
                console.log("User Update Failed!!!")
            }
            else {
                alert("User Update Successfull!!!")
                console.log("User Update Successfull!!!")
            }
        }
    }

    return (
        <div className='user-portfolio-container'>
            <div className='user-portfolio-heading'>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ textAlign: "center", color: "#2146C7", fontWeight: "bold" }}><AiFillCaretDown /> USER PORTFOLIO</span>
                    <AiOutlinePlusCircle id='plus' style={{ fontSize: "25px", fontWeight: "bold", color: "#2146C7" }} onClick={EditUser} />
                    <AiOutlineCloseCircle id='cross' style={{ fontSize: "25px", fontWeight: "bold", color: "#2146C7", display: "none" }} onClick={closeEditUser} />
                </div>
                <div>
                    <span>User Name</span>
                    <span>Stocks</span>
                    <span>Fiat ₹</span>
                </div>
            </div>
            <div className='user-portfolio-data'>
                <form id='edit-user' className='userportfolio-user-container' style={{ display: "none" }} onSubmit={handleSubmit}>
                    <input type="text" placeholder='User' name='user_name' value={user.user_name} onChange={handleChange} />
                    <input type="number" placeholder='Quantity' name='quantity' value={user.quantity} onChange={handleChange} />
                    <input type="number" placeholder='Value' name='portfolio_value' value={user.portfolio_value} onChange={handleChange} />
                    <button>Edit</button>
                </form>
                {
                    userdata && userdata.map((eachItem, index) => <UserData key={index} userdata={eachItem} />)
                }
            </div>
        </div>
    );
}

export default UserPortfolio;