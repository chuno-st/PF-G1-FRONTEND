import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import { Grid,Box } from "@mui/material";
// import './ConteinerCards.css'
import './ConteinerCards.css'
// import { margin } from "@mui/system";
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


    <div>
      <Box sx={{ 
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 10,

      }}>

      
      <Grid container spacing={0.5}>


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
      </Grid>
      </Box>
    </div>
)

}
