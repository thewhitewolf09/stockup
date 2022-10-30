import React from "react";
import "./graph.css"
import { Chart } from "react-google-charts";


const Graph = () => {

    var data = [
        ["Time", "Price"],
        ["2004", 1000],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
        ["2004", 1000],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
        ["2012", 1000]
        
    ];

    const options = {
        title: "Market Price Chart",
        legend: { position: "none" },
    };
    return (
        <div className="graph-container">
            <div className='graph-heading'>
                <div>
                    <span>Asset</span>
                    <span>Price : ₹100.4587</span>
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