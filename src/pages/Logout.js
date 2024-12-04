import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";



export default function Logout(){
    const { unsetUser, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    unsetUser();

    useEffect(() => {
            setUser({token: null})

    })
    return(
        <><Navigate to="/login"/></>
    )
}