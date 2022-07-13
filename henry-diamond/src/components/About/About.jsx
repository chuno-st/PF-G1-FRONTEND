import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="landing">
      <h3>Creators:</h3>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Caro</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Seba</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Bruno</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Feli</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Lauti</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Sole</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">GitHub Agus</Link>
      {/* <img> Imagen de perfil </img> */}
      <Link className="link" to="/Home">Back to Home</Link>
    </div>
  );
};

export default About;