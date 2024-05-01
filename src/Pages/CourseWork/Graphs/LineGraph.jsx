import styled from "styled-components";
import PropTypes from "prop-types";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";


const LineGraph = ({ data, keys }) => {
    // console.log(data);
    let openArr = data["1. open"];
    let closeArr = [];
    console.log(keys);

    openArr = data.map((e) => Number(e["1. open"]));
    closeArr = data.map((e) => Number(e["4. close"]));
    console.log();
    let outlier = getIQR(data);
    return (
        <LineGraphStyled>
            <h2>Open&Close vs Time</h2> {/**line graph */}
            <Line
                datasetIdKey="id"
                data={{
                    labels: keys,
                    datasets: [
                        {
                            id: 1,
                            label: `open`,
                            data: openArr,
                        },
                        {
                            id: 2,
                            label: "close",
                            data: closeArr,
                        },
                        {
                            id: 3,
                            label: "mean",
                            data: getMean(openArr),
                        },
                        {
                            id: 4,
                            label: "lower",
                            data: outlier[0]
                        },
                        {
                            id: 5,
                            label: "upper",
                            data: outlier[1]
                        },
                    ],
                }}
            />
            <br></br><h2>Close-Open vs Time</h2>
            <Bar
                datasetIdKey="id"
                data={{
                    labels: keys,
                    datasets: [
                        {
                            id: 1,
                            label: `Open`,
                            data: getDifference(closeArr, openArr)[0],
                        },
                        {
                            id: 2,
                            label: `close`,
                            data: getDifference(closeArr, openArr)[1],
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

let getIQR = (d) =>{
    let temp = d.map((e) => Number(e["1. open"])).sort();
    console.log('this is temp');
    console.log(temp);
    // index - 1
    let q3 = parseInt(temp[74]);
    let q1 = parseInt(temp[24]);
    let iqr = Math.abs(q3-q1);

    console.log('inside q3, ')
    console.log(q3);
    console.log('inside q1,');
    console.log(q1);
    // returns outliers
    //q3 + (1.5*iqr)
    //q1 - (1.5*iqr)
    let upper
    let lower;
    lower = q1 - (1.5*iqr)
    upper = q3 + (1.5*iqr)
    return populateArr(lower,upper); // array, n=2;
}
let populateArr = (l,u) =>{
    let a = [];
    let b =  [];
    for(let i = 0; i<100; i++){
        a.push(l);
        b.push(u)
    }
    console.log(`this is a: ${a}, this is b: ${b}`);
    return [a,b]
}
export default LineGraph;

// prop-types
LineGraph.propTypes = {
    data: PropTypes.array,
    keys: PropTypes.array,
};

const LineGraphStyled = styled.div`
    background-color: white;
`;
