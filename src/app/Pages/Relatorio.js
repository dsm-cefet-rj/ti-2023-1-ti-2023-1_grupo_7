import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import React from 'react';
import DropdownMenu from '../components/Dropdown';
import { useSelector } from 'react-redux';

export default function Relatorio() {
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  typeof usuarioAtual===typeof undefined?navegar("/"):null;  
  return (
    <main className="main">
      <DropdownMenu/>
      <Logo/>
    </main>
  )
}