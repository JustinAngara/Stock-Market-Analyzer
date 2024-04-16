import { PrimeReactProvider } from "primereact/api";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
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
                        <td>{getMeanOpen(data)}</td>
                        <td>getMeanClose(data)</td>
                        <td>{getIQR(data)}</td>

                    </tr>


                </tbody>
            </table>
    </div>;
};
let getMeanPrice = (d) =>{

}
let getStandardDeviation = (d) =>{

}
let getMeanOpen = (d) =>{

}
let getMeanClose = (d) =>{

}
let getIQR = (d) =>{
    let q3 = d[Math.floor(d.length*.75)]["4. close"];
    let q1 = d[Math.floor(d.length*.25)]["1. open"];
    let iqr = q3-q1;
    console.log('inside q3, ')
    console.log(q3);
    console.log('inside q1,');
    console.log(q1);
    // returns outliers
    return [q3 + (1.5*iqr), q1 - (1.5*iqr)];

}

let styles = `
`;
export default DataTables;
