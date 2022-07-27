import { React, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";

const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
        field: "image",
        headerName: "Imagen",
        width: 150,
        editable: true,
    },
    {
        field: "name",
        headerName: "Producto",
        width: 200,
        editable: true,
    },
    {
        field: "price",
        headerName: "Precio",
        type: "number",
        width: 150,
        editable: true,
    },
    {
        field: "stock",
        headerName: "Stock",
        type: "number",
        width: 200,
        editable: true,
    },
];

const rows = [
   { id: 1, name: "anillo", price: 50, stock: 4, image: "img not found" },
   { id: 2, name: "joya", price: 50, stock: 4, image: "img not found" },
   { id: 3, name: "collar", price: 50, stock: 4, image: "img not found" },
   { id: 4, name: "arito", price: 50, stock: 4, image: "img not found" },
];

export default function Productos() {
    //    const dispatch = useDispatch;

    //    useEffect(()=>{
    //     dispatch(getAllItems())
    //    }, [dispatch])

    const productos = useSelector((state) => state.items);
    console.log(productos);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    );
}
 