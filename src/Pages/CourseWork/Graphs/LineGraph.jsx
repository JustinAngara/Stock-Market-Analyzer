import styled from "styled-components";
import PropTypes from "prop-types";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
const LineGraph = ({ data, keys }) => {
    // console.log(data);
    let openArr = data["1. open"];
    let closeArr = [];
    console.log(keys);

    const open = data.map((e) => Number(e["1. open"]));
    const close = data.map((e) => Number(e["4. close"]));



    return (
        <LineGraphStyled>
            <h2>Close-Open vs Time</h2>
            <Bar
                datasetIdKey="id"
                data={{
                    labels: keys,
                    datasets: [
                        {
                            id: 1,
                            label: `Open`,
                            data: getDifference(close, open)[0],
                        },
                        {
                            id: 2,
                            label: `close`,
                            data: getDifference(close, open)[1],
                        },
                    ],
                }}
            />
            <h2>Open&Close vs Time</h2>
            <Line
                datasetIdKey="id"
                data={{
                    labels: keys,
                    datasets: [
                        {
                            id: 1,
                            label: `open`,
                            data: open,
                        },
                        {
                            id: 2,
                            label: "close",
                            data: close,
                        },
                        {
                            id: 3,
                            label: "mean",
                            data: getMean(open),
                        },
                    ],
                }}
            />
        </LineGraphStyled>
    );
};

let getDifference = (close, open) => {
    let c = [];
    let o = [];
    for(let i = 0; i<close.length;i++){
        if(close[i]-open[i]>=0){
            c.push(close[i]-open[i]);
            o.push(0);
        } else {
            o.push(close[i]-open[i]);
            c.push(0);
        }
    }

    return [c,o];
};
let addSD = (a, b) => {
    // add both variance then squareroot to get the sd between 2 arrays

    let a1 = getStandardDeviation(a);
    let b1 = getStandardDeviation(b);
    let sdT = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2));
    let t = [];
    for (let i = 0; i < a.length; i++) {
        t.push(sdT);
    }
    return t;
};
let getStandardDeviation = (array) => {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return Math.sqrt(
        array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
};
let getMean = (array) => {
    const n = array.length;
    let c = array.reduce((a, b) => a + b) / n;
    let t = [];
    for (let i = 0; i < n; i++) {
        t.push(c);
    }
    return t;
};

let getDerivative = (a) => {
    let t = [];
    for (let i = 0; i < a.length - 1; i++) {
        t.push(a[i] + (a[i + 1] - a[i]) / 2);
    }
    return t;
};

export default LineGraph;

// prop-types
LineGraph.propTypes = {
    data: PropTypes.array,
    keys: PropTypes.array,
};

const LineGraphStyled = styled.div`
    background-color: white;
`;
