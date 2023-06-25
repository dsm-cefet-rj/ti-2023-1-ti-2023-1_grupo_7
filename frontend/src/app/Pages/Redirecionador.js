import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default ()=>{
    const navegar=useNavigate();
    useEffect(()=>{navegar('/login')},[]);
}