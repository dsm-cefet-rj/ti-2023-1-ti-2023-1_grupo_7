import Logo from '../components/Logo'
import '../styles/ListaAtivos.css';
import { Link, useLocation } from 'react-router-dom';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import Carteira from '../components/Carteira';
import { useEffect, useState } from 'react';
import PopupForm from '../components/PopupForm';

const inter = Inter({ subsets: ['latin'] })

export default function ListaCarteiras() {
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const carteiras = useSelector(state=>state.carteiras).filter((c)=>{return c.email===usuarioAtual.id});
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:5000/carteiras')
      .then(T => T.json())
      .then(data=>{dispatch({type:"load_carteira",payload:data});});},[useLocation]);

  function deleteCarteira(id){
    dispatch({type:"delete_carteira",payload:id});
  }
  function __getCarteiras(){
    return(<div className="lista" id='carteiras'>{carteiras.map((element,i)=><Carteira key={i} data={element} deleteCarteira={event=>deleteCarteira(element.id)}/>)}</div>)
  }
  return (
    <main className="main">
      <Logo/>
      <PopupForm/>
      <h2 className={inter.className} id='nomeLista'>
          Minhas Carteiras
      </h2>
      {__getCarteiras()}
    </main>
  )
}