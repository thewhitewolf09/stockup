import React from 'react';
import "./orderbook.css"
import { AiFillCaretDown } from "react-icons/ai"


const orderbookList = [
    {
        order_type: 0,
        volume: "1",
        price: "12"
    },
    {
        order_type: 1,
        volume: "4",
        price: "26"
    },
    {
        order_type: 0,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "18"
    },
    {
        order_type: 1,
        volume: "1",
        price: "31"
    },
    {
        order_type: 1,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "12"
    },
    {
        order_type: 1,
        volume: "4",
        price: "26"
    },
    {
        order_type: 0,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "18"
    },
    {
        order_type: 1,
        volume: "1",
        price: "31"
    },
    {
        order_type: 1,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "12"
    },
    {
        order_type: 1,
        volume: "4",
        price: "26"
    },
    {
        order_type: 0,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "18"
    },
    {
        order_type: 1,
        volume: "1",
        price: "31"
    },
    {
        order_type: 1,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "12"
    },
    {
        order_type: 1,
        volume: "4",
        price: "26"
    },
    {
        order_type: 0,
        volume: "1",
        price: "20"
    },
    {
        order_type: 0,
        volume: "1",
        price: "18"
    },
    {
        order_type: 1,
        volume: "1",
        price: "31"
    },
    {
        order_type: 1,
        volume: "1",
        price: "20"
    }
];


let buyList = [];
let sellList = [];

orderbookList.map((item) => {
    if (item.order_type === 0) {
        buyList.push(item);
    } else {
        sellList.push(item);
    }
});

console.log(buyList)
console.log(sellList)

const BuyOrder = (props) => {
    const { eachItem } = props;
    return (
        <div className='order-book-buy' >
            <span>{eachItem.volume}</span>
            <span style={{ color: "green" }}>{eachItem.price}</span>
        </div>
    );
}
const SellOrder = (props) => {
    const { eachItem } = props;
    return (
        <div className='order-book-sell'>
            <span style={{ color: "red" }}>{eachItem.price}</span>
            <span >{eachItem.volume}</span>
        </div>
    );
}
const CurrentMarket = () => {
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
                        buyList.map((item, index) => <BuyOrder key={index} eachItem={item} />)
                    }
                </div>
                <div>
                    {
                        sellList.map((item, index) => <SellOrder key={index} eachItem={item} />)
                    }
                </div>

            </div>
        </div>
    );
}

export default CurrentMarket;