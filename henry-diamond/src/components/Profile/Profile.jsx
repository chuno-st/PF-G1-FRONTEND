import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Logout/Logout";
import './Profile.css'
import React, {useEffect, useState}from "react";
import { addUser } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";


export const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  let data = {}


  useEffect(() => {
    dispatch(addUser(data));
    }, [isAuthenticated]);

  if (isAuthenticated) {
    data = { 
      id: user.sub,
      userName: user.name,
      email: user.email
    }
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    isAuthenticated && (

      <div className="divPerfil">
        <img 
        className="imgPerfil" 
        
        src={user.picture} 
        // alt={user.name}
        />
        {/* <div className="nameEmail"> */}
        {/* <h2 className="name">{user.name}</h2>
        <p className="email">{user.email}</p> */}
        {/* </div> */}
        <LogoutButton className="logOut" />
      </div>
    )
  );
};