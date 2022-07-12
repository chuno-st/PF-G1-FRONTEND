import React, {useEffect, useState}from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FilterBy,Category, SubCategory } from "../../actions/actions";
import styles from './Filter.css'
/*const pruebaCategory = [
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
];*/

export default function Filter() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const subCategory = useSelector(state => state.subcategory);
    const [filter,setFilter] = useState({
        category: '',
        subcategory: '',
        limite:"",
        desde: "0"

    });
    
   useEffect(() => {
        dispatch(Category());
        dispatch(SubCategory());
    }, []);
    const handleChange = (e) => {
        
        setFilter({
            ...filter,
            [e.target.name]: e.target.value,
        });
        
    };

    return (
        <div style={{ width: "100%" }}>
            <div className="DivSelect">
            <FormControl fullWidth className="Select">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    onChange={handleChange}>   
                    {   
                        category.map((item,index) => {
                            
                            return (
                                <MenuItem key={index} value={item.category_id}>{item.name}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">SubCategory</InputLabel>
                <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    
                    name='subcategory'
                    onChange={handleChange}>    
                    {   
                        subCategory.map((item,index) => {
                        
                            return (
                                <MenuItem key={index} value={item.subCategory_id}>{item.name}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>

            <Button variant="outlined" onClick={() => {dispatch(FilterBy(filter))}} className="Button">filtrar</Button>
            </div>
        </div>
    );
}
