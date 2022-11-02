import React, { useEffect, useState } from 'react';
import "./tradehistory.css"
import { AiFillCaretDown } from "react-icons/ai"
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md"

const HistryDiv = (props) => {
    const { trade } = props;
    return (
        <>
            {
                //(trade.buy_sell === true) ? <div className="buy-history">
                (trade.buy_sell === false) ? <div className="buy-history">
                    <span style={{ color: "green" }}><MdOutlineArrowUpward style={{ marginTop: "5px" }} />{trade.price}</span>
                    <span>{trade.quantity}</span>
                    <span>{trade.buyer}-{trade.seller}</span>
                    <span>{trade.date}</span>
                </div> : <div className="sell-history">
                    <span style={{ color: "red" }}><MdOutlineArrowDownward />{trade.price}</span>
                    <span>{trade.quantity}</span>
                    <span>{trade.seller}-{trade.buyer}</span>
                    <span>{trade.date}</span>
                </div>
            }
        </>
    );
}
const TradeHistory = () => {
    const [trade, setTrade] = useState();

    const gettradHistory = async () => {
        const res = await fetch("http://localhost:5000/api/v1/tradehistory ", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const res_data = await res.json();
        setTrade(res_data.tradehistory);
    }

    useEffect(() => {
        gettradHistory();
    });

    return (
        <div className='trade-history-container'>
            <div className='trade-history-heading'>
                <span style={{ textAlign: "center", color: "#2146C7", fontWeight: "bold" }}><AiFillCaretDown />TRADE HISTORY</span>
                <div>
                    <span>Price</span>
                    <span>Volume</span>
                    <span>Transaction</span>
                    <span>Time</span>
                </div>
            </div>
            <div>
                {
                    trade && trade.map((eachItem, index) => <HistryDiv key={index} trade={eachItem} />).reverse()
                }
            </div>
        </div>
    );
}

export default TradeHistory;