import Logo from '../components/Logo';
import '../styles/ListaAtivos.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import Carteira from '../components/Carteira';
import { useEffect, useState } from 'react';
import DropdownMenu from '../components/Dropdown';

const inter = Inter({ subsets: ['latin'] })

export default function ListaCarteiras() {
  const navegar = useNavigate();
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const carteiras = useSelector(state=>state.carteiras).filter((c)=>{return c.email===usuarioAtual.id});
  console.log(usuarioAtual.senha.toString);
  typeof usuarioAtual===typeof undefined?navegar("/"):null;
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:5000/carteiras')
      .then(T => T.json())
      .then(data=>{dispatch({type:"load_carteira",payload:data});});},[useLocation]);
  function __getCarteiras(){
    return(<div className="lista" id='carteiras'>{carteiras.map((element,i)=><Carteira key={i} data={element}/>)}</div>)
  }
  const handleclick = () => {
    dispatch({type:"add_carteira",payload:{email:usuarioAtual.id,nome:"",ativos:[]}});
  };
  return (
    <main className="main">
      <Logo/>
      <button style={{backgroundImage: "linear-gradient(to left bottom,#0066A2, black)", position:"fixed",right:15,top:55,display:"block"}}onClick={handleclick}>+</button>
      <DropdownMenu/>
      <h2 className={inter.className} id='nomeLista'>
          Minhas Carteiras
      </h2>
      {__getCarteiras()}
    </main>
  )
}