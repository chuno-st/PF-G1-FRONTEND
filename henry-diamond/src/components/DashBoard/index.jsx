import React from 'react'
import SideBar from "../DashBoard/SideBar/SideBar"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllItems, Category, SubCategory } from "../../actions/actions";


export default function Admin() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllItems())
   }, [dispatch])

   useEffect(()=>{
    dispatch(Category())
   }, [])
   
   useEffect(()=>{
    dispatch(SubCategory())
   }, [])
   
  return (
    <SideBar/>
  )
}
