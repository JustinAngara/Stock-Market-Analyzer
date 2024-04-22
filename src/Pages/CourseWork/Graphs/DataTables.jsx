import { PrimeReactProvider } from "primereact/api";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import PredictionAlgorithm from "./PredictionAlgorithm";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

let DataTables = ({data}) => {

    return <div>
        	<table>
                <thead>
                    <tr>
                        <th>Mean prices</th>
                        <th>Standard Deviation Prices</th>
                        <th>Mean Open</th>
                        <th>Mean Close</th>
                        <th>1.5 IQR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{getMeanPrice(data)}</td>
                        <td>{getStandardDeviation(data)}</td>
                        <td>{getMean(data, true)}</td>
                        <td>{getMean(data, false)}</td>
                        <td>{getIQR(data)}</td>

                    </tr>


                </tbody>
            </table>
        <PredictionAlgorithm />
    </div>;
};
let getMeanPrice = (d) =>{
    return parseInt(getMean(d,true)+getMean(d,false))/2

}
let getStandardDeviation = (d) =>{
    const n = d.length

    const mean = getMeanPrice(d);
    return Math.sqrt(d.map(x => Math.pow(x["1. open"] - mean, 2)).reduce((a, b) => a + b) / n)
}

let getMean = (d,isOpen) =>{
    let t = "4. close"
    if(isOpen){
        t= "1. open";
    }
    let z = 0;
    for(let i = 0; i<d.length;i++){
        z += parseInt(d[i][t]);
    }
    return z/100;

}
let getIQR = (d) =>{
    let q3 = parseInt(d[Math.floor(d.length*.75)]["4. close"]);
    let q1 = parseInt(d[Math.floor(d.length*.25)]["1. open"]);
    let iqr = parseInt(q3-q1);
    console.log('inside q3, ')
    console.log(q3);
    console.log('inside q1,');
    console.log(q1);
    // returns outliers
    //q3 + (1.5*iqr)
    //q1 - (1.5*iqr)
    return `[${q1 - (1.5*iqr)}, ${q3 + (1.5*iqr)}]`;

}

let styles = `
`;
export default DataTables;
