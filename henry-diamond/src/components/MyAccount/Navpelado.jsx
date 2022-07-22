import React from "react";
import { Button, Link  } from "@material-ui/core";
import { resetMatch } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function NavPelado () {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleclick = () => {
        dispatch(resetMatch())
        navigate('/')
    }
    return (
        <div>
            <Button onClick={handleclick} > Home
            
            </Button>
            
            
        </div>
    )
}
