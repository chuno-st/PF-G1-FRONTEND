import React from 'react'
import SideBar from "../DashBoard/SideBar/SideBar"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllItemsAdmin, adminCategory, adminSubCategory } from "../../actions/actions";


export default function Admin() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllItemsAdmin())
   }, [dispatch])

   useEffect(()=>{
    dispatch(adminCategory())
   }, [])
   
   useEffect(()=>{
    dispatch(adminSubCategory())
   }, [])
   
  return (
    <SideBar/>
  )
}
