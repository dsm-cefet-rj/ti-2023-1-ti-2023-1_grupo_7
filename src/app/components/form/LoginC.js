import React from "react";
import Button from "./Button";
import "../../styles/LoginC.css"
import { Link , useNavigate } from 'react-router-dom';
import Logo from "../Logo";
import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";

const Login = () => {
  const usuarios = useSelector(state=>state.usuarios);
  const usuarioAtual  = useSelector(state=>state.usuarioAtual);
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [inexistente, setInexistente] = useState(false);
  const [incorreto,setIncorreto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(usuarios.map((u)=>u.id).includes(email)){
      if(JSON.stringify(usuarios.filter((u)=>u.id===email)[0].senha)===JSON.stringify(CryptoJS.AES.decrypt(CryptoJS.AES.encrypt(senha,email),email))){
        dispatch({type:"atualizar_usuarioAtual",payload:(usuarios[usuarios.map((u)=>u.id).indexOf(email)])})
        navegar("/carteiras");
      }else{
        setInexistente(false);
        setIncorreto(true);
      }
    }else{
      setInexistente(true);
      setIncorreto(false);
    }
  };
  return (
  <>
   <div className="effect-background"></div>
    <div className="login">

    <form onSubmit={handleSubmit}>
      <Logo ID='login'/>
      <label>
        Email:
        <input
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite seu email"
        />
      </label>
      <br/><br/>
      <label>
        Senha:
        <input
          type="password"
          autoComplete="current-password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          placeholder="Digite sua senha"
        />
      </label>
      {inexistente?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>email inexistente</p>:<br/>}
      {incorreto?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>senha incorreta</p>:null}
      <br/>
      <Button type='submit' label="Entrar" />
        <br/><br/>
        <Link to="/cadastro"><Button label="Junte-se"/></Link> 
    </form>
    </div>
  </>  
    
  )
}

export default Login;