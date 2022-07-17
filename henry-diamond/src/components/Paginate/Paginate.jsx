import { SET_PAGINADO } from "../../actions/actions";
import {useSelector, useDispatch} from 'react-redux';
import { Button } from "@mui/material";
import { BadgeUnstyled } from "@mui/base";
import { useEffect, useState } from "react";
import {Box} from "@mui/material";



export default function Paginate() {
    const dispatch = useDispatch();
    const items = useSelector( State => State.items)

    const [desde, setDesde] = useState(0)
    const [hasta, SetHasta] = useState(12);

    useEffect(() => {
        dispatch(SET_PAGINADO({desde,hasta}))}
        , [dispatch,desde,hasta]);

    /* const handleSgte = () => {
        dispatch(SET_PAGINADO(
            {
            desde: desde + hasta,
            hasta: hasta
        }))

    }

    const handleAtras = () => {
        dispatch(SET_PAGINADO(
            {
            desde: desde - hasta,
            hasta: hasta
        }))

    } */
    
    return (
        <Box>
            <Button onclick={()=> setDesde(desde-hasta)}>
            Atrás
                 </Button>
            <Button onclick={()=> setDesde(desde+hasta)}>
            Siguiente
                </Button>
        </Box>
    )
}
