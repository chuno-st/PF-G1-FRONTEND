import { Navigate } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
export function PrivateDash({ children }) {
    const { isAuthenticated } = withAuth0();
  /*const user = JSON.parse(localStorage.getItem("user"));
  const getRole = function () {
    if (user && user.token) {
      return user.user.role;
    } else {
      return "NO_ROLE";
    }
  };
  let auxRole = getRole();

  function aux() {
    if (auxRole === "SALES_ROLE" || auxRole === "ADMIN_ROLE") {
      return true;
    } else {
      return false;
    }
  }
  let auth = aux();*/

  return isAuthenticated ? children : <Navigate to="/" />;
}