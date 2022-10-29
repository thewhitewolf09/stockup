import React from 'react';
import "./orderbook.css"
import {AiFillCaretDown} from "react-icons/ai"

const CurrentMarket = ()=>{
    return (
        <div className='current-market-container'>
        <div className='current-market-heading'>
            <span style={{textAlign:"center"}}><AiFillCaretDown/> ORDER BOOK</span>
             <div>
                <span>Volume</span>
                <span>Buy Price</span>
                <span>Sell Price</span>
                <span>Volume</span>
             </div>
        </div>
        <div></div>
        </div>
    );
}

export default  CurrentMarket;