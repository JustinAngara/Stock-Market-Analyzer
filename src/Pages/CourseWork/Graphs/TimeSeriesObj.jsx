import styled from "styled-components";
import PropTypes from "prop-types";
let openCount = 0;
let closeCount = 0;
const TimeSeriesObj = ({ valuesArr }) => {
    console.log("values arr");

    const listItems = valuesArr.map(writeTables);

    return (
        <TimeSeriesObjStyled>

            Open vs Close cost({openCount}, {closeCount})
            {listItems}
            end
        </TimeSeriesObjStyled>
    );
};

let writeTables = (e) => {
    let open = e["1. open"];
    let close = e["4. close"];
    let colorClass = "red";
    if (open > close) {
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
