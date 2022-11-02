import React, { useEffect, useState } from "react";
import "./graph.css"
import { Chart } from "react-google-charts";


const Graph = () => {

    // var data = [
    //     ["Time", "Price"],
    //     ["2004", 1000],
    //     ["2005", 1170],
    //     ["2006", 660],
    //     ["2007", 1030],
    //     ["2004", 1000],
    //     ["2005", 1170],
    //     ["2006", 660],
    //     ["2007", 1030],
    //     ["2012", 1000]

    // ];


    const [graphdata, setGraphdata] = useState();



    const getGraphData = async () => {
        const res = await fetch("https://stockup-server.herokuapp.com/api/v1/marketdata ", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const res_data = await res.json();
        setGraphdata(res_data.market_data);
    }
    useEffect(() => {
        getGraphData();
    });
    const options = {
        title: "Market Price Chart",
        legend: { position: "none" },
    };

    // console.log(graphdata)
    var data = [['Time', 'Price']];

    graphdata && graphdata.map((Item) => data.push([Item.date, Item.price]))

    return (
        <div className="graph-container">
            <div className='graph-heading'>
                <div>
                    <span>Asset</span>
                    <span>Price : ₹{graphdata && graphdata.reverse()[0].price}</span>
                </div>
            </div>
            <div>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="300px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}

export default Graph;