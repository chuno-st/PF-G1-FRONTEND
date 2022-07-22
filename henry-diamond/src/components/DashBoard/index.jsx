import React from 'react'
import SideBar from "../DashBoard/SideBar/SideBar"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllItems } from "../../actions/actions";

export default function Admin() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllItems())
   }, [dispatch])
   
  return (
    <SideBar/>
  )
}
