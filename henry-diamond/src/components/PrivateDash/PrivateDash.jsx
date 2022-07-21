import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { checkRole } from "../../actions/actions";
import {useEffect, useState, react }from "react";
import { Loading } from "../Loading/loading";

export function PrivateDash({ children }) {
  const { user, isAuthenticated, isLoading} = useAuth0();
    const dispatch = useDispatch();
    let id = "";
    let role = useSelector((state) => state.role);


    if (isAuthenticated) {
        id = user.sub
        console.log("dentro de if", id)
        dispatch(checkRole(id))
        
        if (!role) {
          return <Loading />;
        }

        return children
    }else{
      return <Navigate to="/"/>
    }

}