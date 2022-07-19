import { Navigate } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { checkRole } from "../../actions/actions";
import {useEffect, useState, react }from "react";

export function PrivateDash({ children }) {
  const { user, isAuthenticated} = useAuth0();
    const dispatch = useDispatch();
    const id = "";
    const role = useSelector(state => state.role);


    useEffect(() => {
      dispatch(checkRole(id));
      }, [isAuthenticated]);

      
    if (isAuthenticated) {
        id = user.sub
    }

  return role ? children : <Navigate to="/" />;
}