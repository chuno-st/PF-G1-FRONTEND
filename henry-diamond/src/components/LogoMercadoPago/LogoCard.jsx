import { useTheme } from '@mui/material/styles';
import logoCard from './logoCard.fw.png';



const LogoCard = () => {
    const theme = useTheme();

    return (
     
        <>
            <img src={logoCard} alt="logo" width="40" />
        
        </>
    );
};

export default LogoCard;