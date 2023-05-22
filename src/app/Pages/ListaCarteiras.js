import Logo from '../components/Logo';
import '../styles/ListaAtivos.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import Carteira from '../components/Carteira';
import { useEffect, useState } from 'react';
import DropdownMenu from '../components/Dropdown';
import { addCarteira, loadCarteira } from '../slices/CarteirasSlice';

const inter = Inter({ subsets: ['latin'] })

export default function ListaCarteiras() {
  const navegar = useNavigate();
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const carteiras = useSelector(state=>state.carteiras).filter((c)=>{return c.email===usuarioAtual.id});
  useEffect(()=>{JSON.stringify(usuarioAtual)==="{}"?navegar("/"):null;},[]);
  
  const dispatch = useDispatch();
  
  /*useEffect(() => {
    fetch("http://localhost:5000/carteiras")
      .then(T => T.json())
      .then(data=>{dispatch(loadCarteira(data));});},[useLocation]);//trocar pra async*/

  function __getCarteiras(){
    return(<div className="lista" id='carteiras'>{carteiras.map((element,i)=><Carteira key={i} data={element}/>)}</div>)
  }

  const handleclick = () => {
    dispatch(addCarteira({email:usuarioAtual.id,nome:"",ativos:[]}));
  };

  return (
    <main className="main">
      <Logo/>
      <button id='addButton' onClick={handleclick}>+</button>
      <DropdownMenu/>
      <h2 className={inter.className} id='nomeLista'>
          Minhas Carteiras
      </h2>
      {__getCarteiras()}
    </main>
  )
}