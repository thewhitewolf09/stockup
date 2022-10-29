import React from 'react'
import "./buyandsell.css"

const BuyAndSell = () => {
    
    function orderBuy() {
        let buyEl = document.getElementById("buy");
        let sellEl = document.getElementById("sell");
        let buyBox = document.getElementById("buy-container");
        let sellBox = document.getElementById("sell-container");
        buyEl.classList.add("buy-button-after-click");
        sellEl.classList.remove("sell-button-after-click");
        buyBox.style.display = "block";
        sellBox.style.display = "none";

    }
    function orderSell() {
        let sellEl = document.getElementById("sell");
        let buyEl = document.getElementById("buy");
        let buyBox = document.getElementById("buy-container");
        let sellBox = document.getElementById("sell-container");
        sellEl.classList.add("sell-button-after-click");
        buyEl.classList.remove("buy-button-after-click");
        buyBox.style.display = "none";
        sellBox.style.display = "block";
    }

    return (
        <div className='bs-container'>
            <div className='bs-btn-container'>
                <button id='buy' onClick={orderBuy}>BUY</button>
                <button id='sell' onClick={orderSell}>SELL</button>
            </div>
            <div id='buy-container' style={{ display: "block" }}>

            </div>
            <div id='sell-container' style={{ display: "none" }}>

            </div>
        </div>
    );
}

export default BuyAndSell;