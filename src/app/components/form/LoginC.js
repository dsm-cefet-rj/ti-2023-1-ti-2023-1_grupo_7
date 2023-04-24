import React from "react";
import Button from "./Button";
import "./LoginC.css"
import { Link , useNavigate } from 'react-router-dom';
import Logo from "../Logo";
import { useState , useEffect } from "react";

const Login = () => {

  const navegar = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [db, setDB] = useState([]);
  const [erro, setErro] = useState(false);
  const [incorreto,setIncorreto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      if(db[email].senha===senha){
        navegar("/inicio");
      }else{
        setIncorreto(true);
      }
      setErro(false);
    }catch(error){
      setErro(true);
      setIncorreto(false);
    }
  };
  useEffect(() => {
    fetch('http://localhost:1000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);
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
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          placeholder="Digite sua senha"
        />
      </label>
      {erro?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>email inexistente</p>:<br/>}
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