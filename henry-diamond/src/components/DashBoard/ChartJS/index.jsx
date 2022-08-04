import Ventas from "../Ventas/Ventas";
import CategoriaBarChart from "./CategoriaBarChart";
import SubCategoriaBarChart from "./SubCategoriaBarChart";
import { createTheme } from "@mui/material";


export default function IndexChart() {
    const theme = createTheme();
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "space-around", alignItems: "center", marginTop: "30px"}}>
            <CategoriaBarChart />
            <SubCategoriaBarChart />                   
        </div>
    )
}
