import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { checkRole } from "../../actions/actions";
import {useEffect, useState, react }from "react";

export function PrivateDash({ children }) {
  const { user, isAuthenticated, isLoading} = useAuth0();
    const dispatch = useDispatch();
    let id = "";
    let role = useSelector(state => state.role);

    useEffect(() => {
      dispatch(checkRole(id));
      }, [isAuthenticated]);

      
    if (isAuthenticated) {
        id = user.sub
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
          role &&( role ? children : <Navigate to="/" />)
    )
}