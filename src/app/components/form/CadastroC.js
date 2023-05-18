import React from "react";
import Button from "./Button";
import "../../styles/LoginC.css"
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';
import { Inter } from 'next/font/google';
import CryptoJS from "crypto-js";
import Image from "next/image";
import Quiz from "@/app/Pages/Quiz";

const inter = Inter({ subsets: ['latin'] });

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
  const [openModal, setOpenModal] = useState(false);
  const [perfil, setPerfil] = useState('');

  function cadastraUsuario (hash) {

    ({type:"add_usuario",payload:{
                                          "id":email,
                                          "nome":nome,
                                          "senha":{...hash}
                                         }
    });

    const options = {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
          "id":email,
          "nome":nome,
          "perfil":perfil,
          "senha":{...hash}
        })
    }
    return fetch('http://localhost:5000/usuarios', options)
      .then(T => T.json)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!(usuarios.map((u)=>u.id).includes(email))){
      if(senha1===senha2){
        const hash=CryptoJS.AES.decrypt(CryptoJS.AES.encrypt(senha1,email),email);       
        cadastraUsuario(hash);
        dispatch({type:"atualizar_usuarioAtual",payload:{"id":email,"nome":nome,"senha":{...hash}}});
        navegar("/carteiras");//isso vai ser mudado pra levar pro perfil onde definirá o perfil de investidor
        swal({
          title:"Usuário cadastrado!",
          text: "",
          icon:"success"})
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
          <Link to='/'><Image className="seta" src='/seta.svg' width={50} height={50}/></Link>
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
          <label>
          {/**/}
          </label>
          <br/><br/>
          <label>
            Perfil:
            <select onChange={(e)=>setPerfil(e.target.value)} id="selecione">
              <option>Selecione</option>
              <option>Conservador</option>
              <option>Moderado</option>
              <option>Arrojado</option>
            </select>
          </label>
          <br/><br/>
          <label>
            
            <p id="texto_p">Obs: Saiba como descobrir seu perfil de investidor no botão "Info" abaixo:</p>
            
          </label>
          
          {/*<Link to="/cadastro/questionario"><button id="quiz_botao">Info</button></Link>*/}
          
          {existe?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>esse email já está cadastrado</p>:<br/>}
          {diferente?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>as senhas estão diferente</p>:null}
         
          <Quiz/><br/><br/>
          <Button type="submit" label="Cadastrar"></Button>
        </form>
        
      </div>
      
    </>  
      
    )
  }
  
  export default CadastroC;