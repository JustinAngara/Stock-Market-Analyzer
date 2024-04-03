import styled from "styled-components";
import PropTypes from "prop-types";
import React, { useState} from "react";

let openCount = 0;
let closeCount = 0;
let iteration = 0;
const TimeSeriesObj = ({ valuesArr }) => {
    console.log("values arr");

    const listItems = valuesArr.map(writeTables);
    const [response, setResponse] = useState(0);
    return (
        <TimeSeriesObjStyled>

            Open vs Close cost({openCount}, {closeCount}) <br></br>
            <button onClick={()=>{
                console.log('inside onClick method')
                if(iteration%2==0){
                    setResponse(returnTables(listItems));
                } else {
                    setResponse(0);
                }
                iteration++;
            }}>Show open vs close costs table</button>
            {/* <button onClick={setResponse(()=>returnTables(listItems))}>Show open vs close costs table</button> */}
            {/* {listItems} */}
            {response}
            end
        </TimeSeriesObjStyled>
    );
};
let returnTables = (x) =>{
    return <div>
        {x}
    </div>;
}
let writeTables = (e) => {
    let open = e["1. open"];
    let close = e["4. close"];
    let colorClass = "red";
    if (open < close) {
        colorClass = "green";
        openCount++;
    } else{
        closeCount++;
    }
    return (
        <div className={colorClass}>
            {open} open
            <br></br>
            {close} close
        </div>
    );
};
export default TimeSeriesObj;

// prop-types
TimeSeriesObj.propTypes = {
    prop: PropTypes.array,
};

const TimeSeriesObjStyled = styled.div`
    div {
        border: 2px solid #ffffff;
        border-radius: 12px;
    }
    .green{
        background-color: green;
    }
    .red{
        background-color: red;
    }
`;
