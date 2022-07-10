import React from "react";
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FilterBy } from "../actions/actions";

const pruebaCategory = [
    [
        {
            id: 716426,
            title: "Anillo de oro",
            image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 715594,
            title: "Pulsera de plata",
            image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 715497,
            title: "Dije de oro y plata",
            image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 644387,
            title: "Anillo de plata con piedritas",
            image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 716268,
            title: "Combo pulsera y anillo de oro",
            image: "https://spoonacular.com/recipeImages/716268-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 716381,
            title: "Reloj pulsera de plata",
            image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 782601,
            title: "Aritos de oro",
            image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 794349,
            title: "Pulsera, collar y anillo de oro",
            image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 715446,
            title: "Gema de plata y oro amarillo",
            image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
            imageType: "jpg",
        },
        {
            id: 715415,
            title: "Perlas bañandas en oro",
            image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            imageType: "jpg",
        },
    ],
];

export default function Filter() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(FilterBy(e.target.value));
    };

    return (
        <div style={{ width: "30%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Filter by"
                    onChange={handleChange}
                >   {
                        //     <select className="select" onChange={(e) => filterbytype(e.target)}>
                        //     {options.map((k) => {
                        //       return (
                        //         <>
                        //           <option value={k.value}>{k.label} </option>
                        //         </>
                        //       );
                        //     })}
                        //   </select>
                    }
                    <MenuItem value={"Category 1"}> Pureza </MenuItem>
                    <MenuItem value={"Category 2"}> Dureza</MenuItem>
                    <MenuItem value={"Category 3"}> Color</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
