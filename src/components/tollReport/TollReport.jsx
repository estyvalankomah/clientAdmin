import './tollReport.css';
import { DataGrid } from '@material-ui/data-grid';
import { boothRows } from "../../dummyData";
import { useState } from "react";

export default function TollReport(){
    const [data, setData] = useState(boothRows);

    const columns = [
        { 
            field: "id",
            headerName: "ID",
            width: 200 
        },
        { 
            field: "name",
            headerName: "Booth Name",
            width: 380 
        },
        {
            field: "totalCars",
            headerName: "No. of Cars",
            width: 380
        },
      ];

    return(
        <div className="toll-report">
            <h3>Toll Report</h3>
            <DataGrid
                autoHeight
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
            />
        </div>
    )
}