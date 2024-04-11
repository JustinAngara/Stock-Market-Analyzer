import { PrimeReactProvider } from "primereact/api";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

let DataTables = ({data}) => {
    console.log("data tables data");
    console.log(data);
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
                        <td>test1</td>
                        <td>test2</td>
                        <td>test3</td>
                        <td>test4</td>
                        <td>test5</td>

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

}

let styles = `
`;
export default DataTables;
