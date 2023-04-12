"use client"
import Logo from "../components/Logo";
import Login from "../components/form/LoginC";
import './Home.css'
import CadastroC from "../components/form/CadastroC";

export default function Cadastro(){
    return(
       <main className="main">
        <Logo/>
        <div style={{height:170}}/>
        <CadastroC/>

       </main>
    )
}