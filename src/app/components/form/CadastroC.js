import React from "react";
import Button from "./Button";
import "../../styles/LoginC.css"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";

const CadastroC = () => {
  const navegar = useNavigate();
  const dispatch = useDispatch();
  const usuarios = useSelector(state=>state.usuarios);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [existe,setExiste] = useState(false);
  const [diferente,setDiferente] = useState(false);
  
  function cadastraUsuario () {

    dispatch({type:"add_usuario",payload:{
                                          "id":email,
                                          "nome":nome,
                                          "senha":senha1,
                                          "carteiras":[]
                                         }
    });

    const options = {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
          "id":email,
          "nome":nome,
          "senha":senha1,
          "carteiras":[]
        })
    }

    return fetch('http://localhost:5000/usuarios', options)
      .then(T => T.json)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!(usuarios.map((u)=>u.id).includes(email))){
      if(senha1===senha2){
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
          autoComplete="name"
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
          autoComplete="new-password"
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
          autoComplete="new-password"
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