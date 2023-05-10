import Logo from '../components/Logo';
import React from 'react';
import DropdownMenu from '../components/Dropdown';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import '../styles/Conta.css'

export default function Conta() {
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  typeof usuarioAtual===typeof undefined?navegar("/"):null;  
  return (
    <main className="main">
        <Logo/>
        <DropdownMenu/>
        <div className='dadosUsuario'>
          <div style={{textAlign: "center"}}>
            <Image className='icone' src="/conta.svg" alt="perfil" width={100} height={100} priority/>
            <h2>Nome: {usuarioAtual.nome}</h2>
            <h2>E-mail: {usuarioAtual.id}</h2>
            <h2>Perfil de investidor: {typeof usuarioAtual.perfilInvest === typeof undefined? "Ainda não definido":usuarioAtual.perfilInvest}</h2>
          </div>
        </div>
    </main>
  )
}