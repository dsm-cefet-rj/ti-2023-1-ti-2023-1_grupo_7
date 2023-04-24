import React from "react";
import Button from "./Button";
import "./LoginC.css"
import { Link , useNavigate } from 'react-router-dom';
import { useState , useEffect } from "react";
import Logo from "../Logo";

/*
  <form>
    <Logo ID='login'/>
    <Input id="nomer" label="Nome:   " placeholder="Digite seu nome" />
    <Input id="email" label="Email:  " placeholder="Digite seu email"/>
    <Input id="senha" label="Senha   " placeholder="Crie sua senha"/>
    <Input id="senha2" label="Senha   " placeholder="Digite de novo"/>
    <Link to = '/inicio'><Button label="Cadastrar" /></Link>
  </form>
*/

const CadastroC = () => {
  const navegar = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [db, setDB]= useState([]);
  const [body,setBody] = useState({});
  const [existe,setExiste] = useState(false);
  const [diferente,setDiferente] = useState(false);
  
  function cadastraUsuario () {
    const options = {
      method: 'PATCH',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        [email]:body
      })
    }

    return fetch('http://localhost:1000/usuarios', options)
      .then(T => T.json)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(typeof db[email] === typeof undefined){
      if(senha1===senha2){
        setBody({
            "nome":nome,
            "senha":senha1,
            "carteira":[]
          })
        cadastraUsuario();
        navegar("/inicio");
      }else{
      setExiste(false);
      setDiferente(true);
      }
    }else{
        setExiste(true);
        setDiferente(false);
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
        Nome:
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder="Digite seu nome"
        />
      </label>
      <br/>
      <br/>
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
          value={senha1}
          onChange={(e) => setSenha1(e.target.value)}
          required
          placeholder="Crie uma senha"
        />
      </label>
      <br/>
      <br/>
      <label>
        Senha:
        <input
          type="password"
          value={senha2}
          onChange={(e) => setSenha2(e.target.value)}
          required
          placeholder="Digite de novo"
        />
      </label>
      {existe?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>esse email já está cadastrado</p>:<br/>}
      {diferente?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>as senhas estão diferente</p>:null}
      <br/>
      <Button type='submit' label="Cadastrar" />
    </form>
      </div>
    </>  
      
    )
  }
  
  export default CadastroC;