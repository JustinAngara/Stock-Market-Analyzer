import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import getTestData from "./getTestData";
import TimeSeriesObj from "./TimeSeriesObj";
import LineGraph from "./LineGraph";
let symbol = `IBM`; // stock

// another api key 88Q5WZ47EI59BWS9 || 84LJOAJ15Y72QTB8
const AKEY = `88Q5WZ47EI59BWS9`;
const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${AKEY}`;

// import GrabData, {Component} from "./GrabData.jsx";

const Grid = () => {
    // currently test data
    const inventory = [
        { title: "title 1", data: "data 1", insight: "insight 1" },
        { title: "title 2", data: "data 2", insight: "insight 2" },
        { title: "title 3", data: "data 3", insight: "insight 3" },
        { title: "title 4", data: "data 4", insight: "insight 4" },
        { title: "title 5", data: "data 5", insight: "insight 5" },
    ];

    return (
        <GridStyled>
            <h1>Stock Market</h1>
            <br></br>
            <div>
                Test Data {Math.random()}, soon will add graphs based on data
            </div>
            {/* {inventory.map((item) => (
                <GridItem key={item.title}>
                    <h3>{item.title}</h3>
                    <p>Data: {item.data}</p>
                    <p>Insight: {item.insight}</p>
                </GridItem>
            ))} */}

            <br></br>
            {component()}
        </GridStyled>
    );
};

let component = () => {
    const [response, setResponse] = useState(0);
    useEffect(() => {
        fetch("")
            .then((results) => results.json())
            .then((data) => {
                let t = parseApi(data);
                console.log(t[0])

                setResponse(data);
            });
    }, []);

    return (
        <div>
            this is the component func

            <br></br>
            <button
                onClick={() => {
                    let t = parseApi();
                    setResponse(t);
                }}
            >
                click me
            </button>
            {response}
        </div>
    );
};

let parseApi = (data) => {

    let symb;
    let gtd = getTestData();
    // console.log(data);
    if(data==null || data==undefined || data==""){
        data = gtd[0];
        symb = gtd[1];
    }

    let metaData = data["Meta Data"];
    let timeSeriesArr = data["Time Series (5min)"]; // obj


    let timeSeriesArrKeys = Object.keys(timeSeriesArr);
    let timeSeriesArrValues = Object.values(timeSeriesArr);
    console.log(timeSeriesArrKeys);
    return (
        <div>
            <h1>{symb}</h1>

            <LineGraph data = {timeSeriesArrValues} keys = {timeSeriesArrKeys} />
            <TimeSeriesObj valuesArr={timeSeriesArrValues} />
        </div>
    );
};
export default Grid;

const GridStyled = styled.div`
    display: grid;

    grid-gap: 10px; /* Spacing between items */
`;

const GridItem = styled.div`
    color: black;
    background-color: #eee; /* Light background color */
    padding: 10px; /* Padding for content */
    border-radius: 5px; /* Rounded corners */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
    border: 1px solid #ff0000;
    padding: 10px; /* Padding for content *
`;
// this is test commit
