import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <h1> Landing Page en construccion</h1>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/About">About</Link>
    </div>
  );
};

export default Landing;