import styled from 'styled-components';
import getTestData from './getTestData';
const PredictionAlgorithm = () => {
    let data = getTestData(true);

    return <PredictionAlgorithmStyled>
        <h1>Predicted Best Algorithm Stock</h1>
        <div>
            {/* [{grabStocks(data)}] */}
            n-stocks: {data.length} <br></br>
            Most riskiest (outliers)  <br></br>
            Most Stable (low SD): {lowestVar(data)}<br></br>
            <div className = "displayStocks">
                now in display stocks
            </div>
        </div>
    </PredictionAlgorithmStyled>;
}

export default PredictionAlgorithm;


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
    // d is an array filled wth time objects
    // low variablity is defined by min SD
    let stockName = "";
    let lowestSD = 9999;

    let temp;
    for(let i = 0; i < d.length; i++){
        // temp = returnVariance(d[i]);
        if(temp < lowestSD){
            // lowestSD = temp;
            // stockName = grabStocks(d,1);
        }
    }

    return `in lowest var func`
}
let returnVariance = (d) =>{


}
const PredictionAlgorithmStyled = styled.div`
    .displayStocks{
        border: 1px;
    }
`;