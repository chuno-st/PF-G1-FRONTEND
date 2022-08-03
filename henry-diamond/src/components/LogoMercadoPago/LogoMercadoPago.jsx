import { useTheme } from '@mui/material/styles';


const Logo = () => {
    const theme = useTheme();

    return (
       
        <>
            <img src={'logoMercadopago.jpg'} alt="logo" width="180" />
        </>
    );
};

export default Logo;