import { useDispatch } from "react-redux";
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow,Button,} from "@material-ui/core";
import { capitalizeLetter } from "../../../Utils/utils";
import { React, useState } from "react";
import Select from 'react-select'
import { SetRoles, getAllUsers } from "../../../actions/actions.js";
export default function UserForm(props){
    const {elem} = props;
    const dispatch =useDispatch();
    const [role, SetRole]= useState("");
    const options =[
        {value: "Admin",label: "Admin"},
        {value: "User",label: "User"},
        {value: "Locked",label: "Locked"},
    ]
const handleClick =()=>{
    const obj ={
        id: elem.id,
        roles: role
    }
    dispatch(SetRoles(obj));
    setTimeout(function(){
      dispatch(getAllUsers())
  }, 1500);
}

console.log(elem)
return (
    <TableRow key={elem.id_user}>
                  <TableCell>{elem.id_user}</TableCell>
                  <TableCell>
                    <img
                      src={elem.picture}
                      style={{ height: "35px", borderRadius: "5px" }}
                    />
                  </TableCell>
                  <TableCell>{capitalizeLetter(elem.userName)}</TableCell>
                  <TableCell>{capitalizeLetter(elem.email)}</TableCell>
                  <TableCell>
                    <Select defaultInputValue={elem.roles} options={options} onChange={(e)=>SetRole(e.value)} />
                  </TableCell>
                  <TableCell>
                    <Button onClick={handleClick}>Guardar</Button>
                  </TableCell>
                </TableRow>
)
}