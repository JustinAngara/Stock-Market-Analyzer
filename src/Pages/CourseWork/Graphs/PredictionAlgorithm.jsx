import styled from 'styled-components';
import getTestData from './getTestData';
let data = getTestData(true);
const PredictionAlgorithm = () => {



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
    /**
     * high volume .8
     * high amounts of sd but not too much
     * grab news outlet on positive or negative aspects from api
     */
    // grab the sd
    let t = [];
    for(let i =0; i<d.length;i++){
        console.log('now in getRecStock');
        t.push(calculateStockValue(d[i]))
    }
}
let calculateStockValue = (z) =>{
    // this is an array of each object that shows open, close, volume, etc
    let timeSeriesArrValues = Object.values(z["Time Series (5min)"]);
    console.log(timeSeriesArrValues);

    for(let i =0 ; i < 10; i++){
        console.log('inside calc stock value');

    }
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