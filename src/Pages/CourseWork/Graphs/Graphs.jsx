import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import getTestData from "./getTestData";
import TimeSeriesObj from "./TimeSeriesObj";
import LineGraph from "./LineGraph";
import DataTables from "./DataTables";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
let symbol = `IBM`; // stock

// another api key 88Q5WZ47EI59BWS9 || 84LJOAJ15Y72QTB8
const AKEY = `88Q5WZ47EI59BWS9`;
const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${AKEY}`;

// import GrabData, {Component} from "./GrabData.jsx";
let timeArr;
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
            {/* <div>
                Test Data {Math.random()}, soon will add graphs based on data
            </div> */}
            <br></br>
            {component()}
        </GridStyled>
    );
};
// connects to api
let component = () => {
    const [response, setResponse] = useState(0);
    useEffect(() => {
        fetch("")
            .then((results) => results.json())
            .then((data) => {
                let t = parseApi(data);
                setResponse(data);
            });
    }, []);

    return (
        <div>
            <div></div>
            <br></br>
            <button
                onClick={() => {
                    setResponse(parseApi());
                }}
            >
                click me
            </button>
            {response}
        </div>
    );
};

let parseApi = (data) => {
    // console.log(data);

    if (data == null || data == undefined || data == "") {
        timeArr = getTestData();
    }

    let metaData = timeArr["Meta Data"];
    let timeSeriesArr = timeArr["Time Series (5min)"]; // obj
    let symb = metaData["2. Symbol"];

    let timeSeriesArrKeys = Object.keys(timeSeriesArr);
    let timeSeriesArrValues = Object.values(timeSeriesArr);
    console.log(timeSeriesArrKeys);

    const onSelect = (eventKey, event) => {
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        console.log(eventKey); // selected event will trigger
    };

    return (
        <div>
            {/* will display drop down from here */}

            <Dropdown onSelect={onSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Stock
                </Dropdown.Toggle>
                {generateArrList()}
            </Dropdown>

            <DataTables data={timeSeriesArrValues} />
            {/* end of drop down */}

            <h2>Symbol: {symb}</h2>
            <LineGraph data={timeSeriesArrValues} keys={timeSeriesArrKeys} />
            <TimeSeriesObj valuesArr={timeSeriesArrValues} />
        </div>
    );
};

let generateArrList = () => {
    console.log("generate arr key lists");
    const metaData = getTestData(true); // Assuming getTestData returns the data
    const symbolList = metaData.map((e) => e["Meta Data"]["2. Symbol"]);
    console.log('this is x');
    console.log(symbolList); // Use symbolList for clarity

    return (
      <Dropdown.Menu>
        {symbolList.map((symbol, i) => (
          <Dropdown.Item key={i}>{symbol}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
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
