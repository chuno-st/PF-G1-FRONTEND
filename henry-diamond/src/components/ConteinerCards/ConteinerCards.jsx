import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";


export default function ContainerCards() {
const items = useSelector(state => state.items);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllItems())}
  , [dispatch])

return (
    <>
        {items.map(item => (    //map para recorrer el array de items
            <BasicCard key={item.id} item={item} /> ))}

    </>
)

}
