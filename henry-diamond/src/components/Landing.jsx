import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
const Landing = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="landing">
      <h1> Landing Page en construccion</h1>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/About">About</Link>
      {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
    </div>
  );
};

export default Landing;