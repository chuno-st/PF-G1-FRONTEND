import CategoriaBarChart from "./CategoriaBarChart";
import SubCategoriaBarChart from "./SubCategoriaBarChart";

export default function IndexChart() {
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "space-around", alignItems: "center"}}>
            <CategoriaBarChart />
            <SubCategoriaBarChart />
        </div>
    )
}
