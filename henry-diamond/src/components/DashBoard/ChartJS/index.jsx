import CategoriaBarChart from "./CategoriaBarChart";
import SubCategoriaBarChart from "./SubCategoriaBarChart";
import style from "./index.module.css";

export default function IndexChart() {
    return (
        <div className={style.Chart}>
            <CategoriaBarChart />
            <SubCategoriaBarChart />
        </div>
    )
}
