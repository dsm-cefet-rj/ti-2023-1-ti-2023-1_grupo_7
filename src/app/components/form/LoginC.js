import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./LoginC.css"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <>
   <div className="effect-background"></div>
    <div className="login">
      <form>
        <Input id="email" label="Email:   " />
        <Input id="senha" label="Senha:   " type="password" />
        <Link to="/inicio"><Button label="Entrar" /></Link><br/><br/>
        <Link to="/cadastro"><Button label="Junte-se"/></Link>  
      </form>
    </div>
  </>  
    
  )
}

export default Login;