import React from 'react';
import "./tradehistory.css"
import { AiFillCaretDown } from "react-icons/ai"
import {MdOutlineArrowUpward,MdOutlineArrowDownward} from "react-icons/md"
const tradehistoryList = [
    {
        order_type: 0,
        volume: "1",
        price: "12",
        time: "8:12:36"
    },
    {
        order_type: 1,
        volume: "4",
        price: "26",
        time: "8:12:36"
    },
    {
        order_type: 0,
        volume: "1",
        price: "20",
        time: "8:12:36"
    },
    {
        order_type: 0,
        volume: "1",
        price: "18",
        time: "8:12:36"
    },
    {
        order_type: 1,
        volume: "1",
        price: "31",
        time: "8:12:36"
    },
    {
        order_type: 1,
        volume: "1",
        price: "20",
        time: "8:12:36"
    },
    {
        order_type: 0,
        volume: "1",
        price: "12",
        time: "8:12:36"
    },
    {
        order_type: 1,
        volume: "4",
        price: "26",
        time: "8:12:36"
    },
    {
        order_type: 0,
        volume: "1",
        price: "20",
        time: "8:12:36"
    },
    {
        order_type: 0,
        volume: "1",
        price: "18",
        time: "8:12:36"
    },
    {
        order_type: 1,
        volume: "1",
        price: "31",
        time: "8:12:36"
    },
    {
        order_type: 1,
        volume: "1",
        price: "20",
        time: "8:12:36"
    }
];
const HistryDiv = (props) => {
    const { trade } = props;
    return (
        <>
            {
                (trade.order_type === 0) ? <div className="buy-history">
                    <span style={{color : "green"}}><MdOutlineArrowUpward style={{marginTop : "5px"}}/>{trade.price}</span>
                    <span>{trade.volume}</span>
                    <span>{trade.time}</span>
                </div> : <div className="sell-history">
                    <span style={{color : "red"}}><MdOutlineArrowDownward/>{trade.price}</span>
                    <span>{trade.volume}</span>
                    <span>{trade.time}</span>
                </div>
            }
        </>
    );
}
const TradeHistory = () => {
    return (
        <div className='trade-history-container'>
            <div className='trade-history-heading'>
                <span style={{ textAlign: "center", color: "#2146C7", fontWeight: "bold" }}><AiFillCaretDown />TRADE HISTORY</span>
                <div>
                    <span>Price</span>
                    <span>Volume</span>
                    <span>Time</span>
                </div>
            </div>
            <div>
                {
                    tradehistoryList.map((eachItem, index) => <HistryDiv key={index} trade={eachItem} />)
                }
            </div>
        </div>
    );
}

export default TradeHistory;