import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import './ConteinerCards.css'
import { Box } from '@material-ui/core'
import { margin } from "@mui/system";
import { useState } from "react";


export default function ContainerCards() {
const items = useSelector(state => state.items);
const dispatch = useDispatch();

const [paginate, setPaginate] = useState(8);
const [base, setBase] = useState(0);

useEffect(() => {
  dispatch(getAllItems())}
  , [dispatch])


  const nextPage = () => {
        
    setPaginate((prevValue) => prevValue + 8);
    setBase((prevBase) => prevBase + 8)
};


const previousPage = () => {
    
    setPaginate((prevValue) => prevValue -8);
    setBase((prevBase) => prevBase -8)
};  

return (


    <div className="containerCards">



        {items.length ? (

          items.slice(base, paginate).map(item => (    //map para recorrer el array de items
              <BasicCard key={item.id} item={item} /> ))
        ):(
          <Box sx={{
            hight: 'auto',
            marginTop: '17%',
            marginBottom: '17%'

          }}>
            
          
          
            <h1>Cargando...</h1>

            

           

          </Box>
        )
        }

    </div>
)

}
