import './App.css';
import initialTableData from "./table_data.json";
import * as React from "react";

/* NEW FEATURES ideas
// define custom header into an array 
// delete rows
// filter columns
// add rows
*********************** */

export default function Table({searchString}) {

        const [tableData, setTableData] =  React.useState([])
        
        React.useEffect(() => {
                setTableData(initialTableData);
        }, []);

        const getTableHeader = (columnName, cell) => {
                if ((columnName === "repository_link" || columnName === "demo_link") && cell !== "TBD") {
                        return (
                                <td>
                                        <a href={cell} target='_blank' rel='noreferrer'> {cell} </a>
                                </td>
                        )
                }  
                return (
                        <td>
                                {cell}
                        </td> 
                )
        }

        const filterTable = React.useCallback( () => {
                const filteredTableData = initialTableData.filter((demo) => (
                        Object.values(demo).some((val) => {
                                return `${val}`.toLowerCase().includes(searchString.toLowerCase())
                        })
                ));

                setTableData(filteredTableData);
        }, [searchString]);

        React.useEffect(() => {
                filterTable();
        }, [filterTable]);

        return (
                <table>
                        <thead>
                                <tr>
                                        {
                                                tableData.length !== 0 && 
                                                Object.keys(tableData[0]).map((header) =>(
                                                        <th key = {header} >
                                                                {header}
                                                        </th>
                                                ))
                                        }
                                </tr>
                        </thead>
                        <tbody>
                                {       
                                        tableData.length !== 0 && 
                                        tableData.map((demo) => (
                                        <tr> 
                                                { 
                                                Object.entries(demo).map(([key, value]) => ( getTableHeader(key, value)))
                                                }
                                        </tr>
                                        ))
                                }       
                        </tbody>
                </table>
        )
                
        
}