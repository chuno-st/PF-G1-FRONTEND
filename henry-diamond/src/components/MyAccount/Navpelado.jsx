import React from "react";
import { Button, Link  } from "@material-ui/core";

import { useNavigate } from "react-router-dom";

export default function NavPelado () {

    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/')
    }
    return (
        <div>
            <Button onClick={handleclick} > Home
            
            </Button>
            
            
        </div>
    )
}
