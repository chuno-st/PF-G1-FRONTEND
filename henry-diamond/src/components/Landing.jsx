import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles({
  claseLanding: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})



const Landing = () => {

  const classesLanding = useStyle()

  return (
    <div className="landing">
      <Typography variant="h2" color="secondary">Landing Page en construccion</Typography>
      <Typography variant="body1" color="inherit" align="center">
        parrafo de la landing
      </Typography>
      <Button 
        className={classesLanding.claseLanding}
        color="secondary" 
        variant="outlined"
        endIcon={<AccessAlarm />}
        >
        hi
      </Button>
      <Button
      className={classesLanding.claseLanding}
      color="secondary" 
      variant="outlined"
      >
        <Link className="link" to="/Home">
          Home
        </Link>
      </Button>
      <Button
      className={classesLanding.claseLanding}
      color="secondary" 
      variant="outlined"
      >
      <Link className="link" to="/About">About</Link>
      </Button>
    </div>
  );
};

export default Landing;