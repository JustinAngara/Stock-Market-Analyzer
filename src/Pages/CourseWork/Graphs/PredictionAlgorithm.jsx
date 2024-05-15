import styled from 'styled-components';
import getTestData from './getTestData';
import GrabNews from "./GrabNews"

let data = getTestData(true);
let globalSDArr; // global sd array
const PredictionAlgorithm = () => {
    globalSDArr = populateSDArray(data)


    return <PredictionAlgorithmStyled>
        <h1>Predicted Best Algorithm Stock</h1>
        <div>
            [{grabStocks(data, 0).toString()}]<br></br>

            n-stocks: {data.length} <br></br>
            Recommended: {getRecStock(data)}  <br></br>
            Most Stable (low SD): {lowestVar(data)}<br></br>
            <div className = "displayStocks">
                now in display stocks
            </div>
        </div>
    </PredictionAlgorithmStyled>;
}

export default PredictionAlgorithm;

let getRecStock = (d) =>{

    let t = [];
    for(let i =0; i<d.length;i++){
        console.log('now in getRecStock');
        t.push(calculateStockValue(d[i], i))
    }
}


// imposed Algorithm

/**
 * # of lower bound outliers, val: .4
 * if the standard deviation is within the .25 - .75 of listed stocks, val: .2
 * pearson skewness gets exponentially greater: .1
 * news article parser to determine positive or negative based on eVal, val: .3
 * */

let populateSDArray = (d) =>{
    console.log('in populate sd arrayy');
    console.log(d);
    let t = [];

    for(let i = 0; i < d.length; i++){
        t.push(getSD(d[i]));
    }
    t = t.sort();
    console.log('this is t');
    console.log(t);
    return t;
}
let calculateStockValue = (z, i) =>{
    // this is an array of each object that shows open, close, volume, etc
    let tsv = Object.values(z["Time Series (5min)"]);
    console.log(tsv);
    // console.log(`now in get rec stock ${GrabNews()}`);
    let sd = getSD(z);
    console.log('calculate stock value method');
    console.log(sd);
    // if sd < sd[sd.length*.75] && sd > sd[sd.length*.25]
    for(let i =0 ; i < tsv.length; i++){
        // tsv[i] is the individual 5 minute intervals at index i
        console.log('calculatestockvaluemethod ');
        console.log(tsv[i]);



    }
}

let grabPearsonsCoefficient = (stock) =>{

}

let grabStocks = (d, z) =>{
    if(z!==0){
        return d[z]["Meta Data"]["2. Symbol"]
    }
    let t = [];
    for(let i =0; i<d.length;i++){
        console.log('this is symbol');

        console.log(d[i]["Meta Data"]["2. Symbol"]);
        t.push(d[i]["Meta Data"]["2. Symbol"]);

    }

    return t.toString();

}
let lowestVar = (d) =>{
    let minVar = 99999;
    let tinkerMin = "";
    let temp;
    for(let i = 0; i<d.length; i++){
        temp = getSD(d[i])
        if(temp < minVar){
            console.log(`this is temp: ${temp}`);
            minVar = temp;
            tinkerMin = grabStocks(data,i)
        }
    }
    return `Tinker: ${tinkerMin}, SD: (${minVar})`
}

let invNorm = (x) =>{

}



let getSD = (d) => {
    console.log('getSD method');

    d = d["Time Series (5min)"];
    d = Object.values(d);


    let  open = d.map((e) => Number(e["1. open"]));

    console.log('in d');
    console.log(open);
    // console.log(open);

    const n = open.length;
    const mean = open.reduce((a, b) => a + b) / n;
    return Math.sqrt(
        open.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n

    );
}

const PredictionAlgorithmStyled = styled.div`
    .displayStocks{
        border: 1px;
    }
`;