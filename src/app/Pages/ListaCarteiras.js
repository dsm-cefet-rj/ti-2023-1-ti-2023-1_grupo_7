import Logo from '../components/Logo'
import '../styles/ListaAtivos.css';
import { Link, useLocation } from 'react-router-dom';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import Carteira from '../components/Carteira';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function ListaCarteiras() {
  useEffect(() => {
    fetch('http://localhost:5000/carteiras')
      .then(T => T.json())
      .then(data=>{dispatch({type:"load_carteira",payload:data});});},[useLocation]);
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const carteiras = useSelector(state=>state.carteiras).filter((c)=>{return usuarioAtual.carteiras.includes(c.id)});
  const dispatch = useDispatch();

  function deleteCarteira(id){
    dispatch({type:"delete_carteira",payload:id});
  }
  function __getCarteiras(){
    return(<div className="lista">{carteiras.map((element,i)=><Carteira key={i} data={element} deleteCarteira={event=>deleteCarteira(element.id)}/>)}</div>)
  }

  return (
    <main className="main">
      <Logo/>
      <h2 className={inter.className} id='nomeLista'>
          Minhas Carteiras
      </h2>
      {__getCarteiras()}
    </main>
  )
}