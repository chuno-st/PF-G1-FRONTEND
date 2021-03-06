import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterBy, Category, SubCategory, getAllItems    } from "../../actions/actions";
import { InputLabel, MenuItem, FormHelperText, FormControl, Select, Button } from "@mui/material";
import { capitalizeLetter } from "../../Utils/utils.js";
import { Loading } from "../Loading/loading";

export default function Filter() {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    const subCategory = useSelector((state) => state.subcategory);
    const [filter, setFilter] = useState({
        category: "",
        subcategory: "",
        limite: "",
        desde: "0",
    });

    useEffect(() => {
        dispatch(Category());
        dispatch(SubCategory());
    }, [category, subCategory]);
    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value,
        });
    };
    const handleReset = () =>{
        dispatch(getAllItems());
        setFilter({
            category: "",
            subcategory: "",
            limite: "",
            desde: "0",
        });
    }
    

    return (
        <div style={{ width: "100%" }}>
            <div>
                <FormControl sx={{ m: -0.1, minWidth: 120, marginRight: 1 }}>
                    <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                    <Select
                        size="small"
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        name="category"
                        label="Category"
                        value={filter.category}
                        onChange={handleChange}
                    >
                        {category.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item.category_id}>
                                    {capitalizeLetter(item.name)}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: -0.1 , minWidth: 160, marginRight: 1 }}>
                    <InputLabel id="demo-simple-select-helper-label">Sub-Categoria</InputLabel>
                    <Select
                        size="small"
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        name="subcategory"
                        label="Sub-Category"
                        value={filter.subcategory}
                        onChange={handleChange}
                    >
                        {subCategory.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item.subCategory_id}>
                                    {capitalizeLetter(item.name)}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Button
                    variant="outlined"
                    onClick={() => {
                        dispatch(FilterBy(filter));
                    }}
                    className="Button"
                >
                    Filtrar
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        handleReset();
                    }}
                    className="Button"
                >
                    Limpiar
                </Button>
            </div>
        </div>
    );
}