import React, {useEffect, useState}from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FilterBy,Category, SubCategory } from "../../actions/actions";
import styles from './Filter.css'
import { capitalizeLetter } from "../../Utils/utils.js"



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
                <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    onChange={handleChange}>   
                    {   
                        category.map((item,index) => {
                            
                            return (
                                <MenuItem key={index} value={item.category_id}>{capitalizeLetter(item.name)}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sub-Categorias</InputLabel>
                <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='subcategory'
                    onChange={handleChange}>    
                    {   
                        subCategory.map((item,index) => {
                        
                            return (
                                <MenuItem key={index} value={item.subCategory_id}>{capitalizeLetter(item.name)}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>

            <Button variant="outlined" onClick={() => {dispatch(FilterBy(filter))}} className="Button">Filtrar</Button>
            </div>
        </div>
    );
}
