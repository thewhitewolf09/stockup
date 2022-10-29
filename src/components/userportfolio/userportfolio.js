import React from 'react';
import "./userportfolio.css"
import {AiFillCaretDown} from "react-icons/ai"

const UserPortfolio = ()=>{
    return (
        <div className='user-portfolio-container'>
        <div className='user-portfolio-heading'>
            <span style={{textAlign:"center"}}><AiFillCaretDown/> USER PORTFOLIO</span>
             <div>
                <span>User Name</span>
                <span>Stocks</span>
                <span>Fiat $</span>
             </div>
        </div>
        <div></div>
        </div>
    );
}

export default  UserPortfolio;