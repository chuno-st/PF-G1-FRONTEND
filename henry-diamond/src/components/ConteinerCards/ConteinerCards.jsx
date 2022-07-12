import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import './ConteinerCards.css'

export default function ContainerCards() {
const items = useSelector(state => state.items);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllItems())}
  , [dispatch])

return (


    <div className="containerCards">



        {items.length ? (

          items.map(item => (    //map para recorrer el array de items
              <BasicCard key={item.id} item={item} /> ))
        ):(
          <h1>Loading ...</h1>
        )
        }

    </div>
)

}
