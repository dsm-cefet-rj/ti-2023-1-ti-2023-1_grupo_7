"use client"
import Logo from "../components/Logo";
import Login from "../components/form/LoginC";
import './Home.css'

export default function Logi(){
    return(
       <main className="main">
        <Logo/>
        <div style={{height:170}}/>
        <Login/>

       </main>
    )
}