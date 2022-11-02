import React, { useEffect, useState } from 'react';
import "./orderbook.css"
import { AiFillCaretDown } from "react-icons/ai"


const BuyOrder = (props) => {
    const { eachItem } = props;
    return (
        <div className='order-book-buy' >
            <span>{eachItem.quantity}</span>
            <span style={{ color: "green" }}>{eachItem.price}</span>
        </div>
    );
}
const SellOrder = (props) => {
    const { eachItem } = props;
    return (
        <div className='order-book-sell'>
            <span style={{ color: "red" }}>{eachItem.price}</span>
            <span >{eachItem.quantity}</span>
        </div>
    );
}
const CurrentMarket = () => {

    const [ordersell, setOrdersell] = useState();
    const [orderbuy, setOrderbuy] = useState();
    const getOrderBook = async () => {
        const res = await fetch("https://stockup-server.herokuapp.com/api/v1/orderbook ", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const res_data = await res.json();
        setOrdersell(res_data.order_sell);
        setOrderbuy(res_data.order_buy);
    }

    useEffect(() => {
        getOrderBook();
    })
    return (
        <div className='current-market-container'>
            <div className='current-market-heading'>
                <span style={{ textAlign: "center", color: "#2146C7", fontWeight: "bold" }}><AiFillCaretDown /> ORDER BOOK</span>
                <div>
                    <span>Volume</span>
                    <span>Buy Price</span>
                    <span>Sell Price</span>
                    <span>Volume</span>
                </div>
            </div>
            <div className='order-book-container'>
                <div>
                    {
                        orderbuy && orderbuy.map((item, index) => <BuyOrder key={index} eachItem={item} />)
                    }
                </div>
                <div>
                    {
                        ordersell && ordersell.map((item, index) => <SellOrder key={index} eachItem={item} />)
                    }
                </div>

            </div>
        </div>
    );
}

export default CurrentMarket;