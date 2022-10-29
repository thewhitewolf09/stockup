import React from 'react';
import "./tradehistory.css"
import {AiFillCaretDown} from "react-icons/ai"

const TradeHistory = ()=>{
    return (
        <div className='trade-history-container'>
        <div className='trade-history-heading'>
            <span style={{textAlign:"center"}}><AiFillCaretDown/>TRADE HISTORY</span>
             <div>
                <span>Price</span>
                <span>Volume</span>
                <span>Time</span>
             </div>
        </div>
        <div></div>
        </div>
    );
}

export default  TradeHistory;