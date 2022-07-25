import { SET_PAGINADO } from "../../actions/actions";
import {useSelector, useDispatch} from 'react-redux';
import { Button } from "@mui/material";
//import { BadgeUnstyled } from "@mui/base";
import { useEffect, useState } from "react";
import {Box} from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
// import { brown, amber, deepOrange } from "@material-ui/core/colors";

const useStyle = makeStyles({
    styleButton:{
        background:'secondary',
        color: '#ffbb66',
        padding: 2,
    }
})



export default function Paginate() {
    const dispatch = useDispatch();
    const items = useSelector( State => State.items)
    const [desde, setDesde] = useState(0)
    const [hasta, SetHasta] = useState(12);
    
    const classes = useStyle();
   
   
    useEffect(() => {
        dispatch(SET_PAGINADO({desde,hasta}))}
        , [dispatch,desde,hasta]);


    
    
    return (
        <div>
                <Box>
                    <Button 
                    onclick={()=> setDesde(desde-hasta)}
                    className={classes.styleButton}
                    >
                    Atrás
                    </Button>
                    <Button 
                    className={classes.styleButton}
                    onclick={()=> setDesde(desde+hasta)}>
                    Siguiente
                    </Button>
                </Box>
        </div>
    )
}
