import { useLocation } from "react-router-dom";
import Login from "../components/form/LoginC";
import '../styles/Home.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LogIn(){
    const dispatch=useDispatch();
    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
          .then(T => T.json())
          .then(data=>{dispatch({type:"load_usuario",payload:data});});},[useLocation]);
    return(
       <main className="main">
        <Login/>
       </main>
    )
}