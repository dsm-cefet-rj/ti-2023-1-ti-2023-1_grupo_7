import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./LoginC.css"
import { Link } from 'react-router-dom';
import Logo from "../Logo";

const CadastroC = () => {
    return (
    <>
     <div className="effect-background"></div>
      <div className="login">
        <form>
          <Logo ID='login'/>
          <Input id="nomer" label="Nome:   " placeholder="Digite seu nome" />
          <Input id="email" label="Email:  " placeholder="Digite seu email"/>
          <Input id="senha" label="Senha   " placeholder="Crie sua senha"/>
          <Input id="senha2" label="Senha   " placeholder="Digite de novo"/>
          <Link to = '/inicio'><Button label="Cadastrar" /></Link>
        </form>
      </div>
    </>  
      
    )
  }
  
  export default CadastroC;