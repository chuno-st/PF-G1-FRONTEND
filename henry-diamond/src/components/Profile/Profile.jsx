import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Logout/Logout";
import './Profile.css'
import React, {useEffect, useState}from "react";
import { addUser } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();

  const [newUser,setNewUser] = useState({
    id : "",
    newUser: "",
    email: ""
});


  if (user){
    setNewUser({
      ...newUser,
      id : user.sub,
      newUser: user.name,
      email: user.email
    })
    dispatch(addUser(newUser))
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="divPerfil">
        <img className="imgPerfil" src={user.picture} alt={user.name} />
        <div className="nameEmail">
        <h2 className="name">{user.name}</h2>
        <p className="email">{user.sub}</p>
        </div>
        <LogoutButton  className="logOut" />
      </div>
    )
  );
};