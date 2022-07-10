import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import Filter from "./Filter.jsx";

const Landing = () => {
  return (
    <div className="landing">
      <h1> Landing Page en construccion</h1>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/About">About</Link>
      <br/>
      <br/>
      <Filter/>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Landing;