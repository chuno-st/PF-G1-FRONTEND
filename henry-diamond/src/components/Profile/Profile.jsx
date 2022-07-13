import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Logout/Logout";
import './Profile.css'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="divPerfil">
        <img className="imgPerfil" src={user.picture} alt={user.name} />
        <div className="nameEmail">
        <h2 className="name">{user.name}</h2>
        <p className="email">{user.email}</p>
        </div>
        <LogoutButton  className="logOut" />
      </div>
    )
  );
};