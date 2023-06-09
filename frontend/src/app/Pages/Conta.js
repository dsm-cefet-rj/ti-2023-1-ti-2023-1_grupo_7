import Logo from '../components/Logo';
import React, { useEffect } from 'react';
import DropdownMenu from '../components/Dropdown';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import '../styles/Conta.css'
import { useNavigate } from 'react-router-dom';

export default function Conta() {
  const navegar = useNavigate();
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  useEffect(()=>{JSON.stringify(usuarioAtual)==="{}"||JSON.stringify(usuarioAtual).startsWith("[")?navegar("/"):null;},[]);
  return (
    <main className="main">
        <Logo/>
        <DropdownMenu/>
        <div className='dadosUsuario'>
          <div style={{textAlign: "center"}}>
            <Image className='icone' src="/conta.svg" alt="perfil" width={100} height={100} priority/>
            <h2>Nome: {usuarioAtual.nome}</h2><br/>
            <h2>E-mail: {usuarioAtual.id}</h2><br/>
            <h2>Perfil de investidor: {typeof usuarioAtual.perfil === typeof undefined? "Ainda não definido":usuarioAtual.perfil}</h2>
          </div>
        </div>
    </main>
  );
}
