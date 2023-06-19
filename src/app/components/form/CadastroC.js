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
import { updateUsuarioAtual } from "@/app/slices/UsuarioAtualSlice";
import QuizC from "./Quiz";

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
  const [Q1,setQ1] = useState('');
  const [Q2,setQ2] = useState('');
  const [Q3,setQ3] = useState('');

  function cadastraUsuario (hash) {

    ({type:"add_usuario",payload:{
                                          "id":email,
                                          "nome":nome,
                                          "senha":{...hash}
                                         }
    });

    const options = {
      method: 'POST',
      headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000"},
      body: JSON.stringify({
          "id":email,
          "nome":nome,
          "perfil":((+Q1)+(+Q2)+(+Q3))<6?'Conservador':((+Q1)+(+Q2)+(+Q3))<12?'Moderado':'Arrojado',
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
        dispatch(updateUsuarioAtual({"id":email,"nome":nome,"perfil":((+Q1)+(+Q2)+(+Q3))<6?'Conservador':((+Q1)+(+Q2)+(+Q3))<12?'Moderado':'Arrojado',"senha":{...hash}}));
        /*navegar("/carteiras");
        swal({
          title:"Usuário cadastrado!",
          text: "",
          icon:"success"})*/
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
        <Link to='/'><Image className="seta" alt='seta' src='/seta.svg' width={50} height={50}/></Link>
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
          <br/><br/>
          <p className="texto">O quanto você valoriza aumentar seu patrimônio?<br/>{' (5: muito 1: pouco)'}</p><br/>
          <QuizC name='Q1' setValue={setQ1}/>
          <br/>
          <p className="texto">Quanto risco você está disposto a correr?<br/>{' (5: muito 1: pouco)'}</p><br/>
          <QuizC name='Q2' setValue={setQ2}/>
          <br/>
          <p className="texto">Qual a escala de capital que gostaria de administrar?<br/>{' (5: grande (empresa ou empreendedor) 1: pouco (pequenos investimentos pessoais))'}</p><br/>
          <QuizC name='Q3' setValue={setQ3}/>
          
          {existe?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>esse email já está cadastrado</p>:<br/>}
          {diferente?<p style={{color:"red",backgroundColor:"#00000030",width:120,margin:"auto",borderRadius:5}}>as senhas estão diferente</p>:null}
         
          <Button type="submit" label="Cadastrar"></Button>
        </form>
      </div>
    </>  
      
    )
  }
  
  export default CadastroC;