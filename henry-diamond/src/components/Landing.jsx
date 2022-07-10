import { Link } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import Filter from "./Filter"
const Landing = () => {
  return (
    <>
    
    <div className="landing">
      <h1> Landing Page en construccion</h1>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/About">About</Link>
    </div>
    <Filter/>
    <div>
    <Footer/>
    </div>
      
    
    </>
  );
};

export default Landing;