import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import { BsFillBarChartLineFill } from "react-icons/bs";
import React, { useEffect } from 'react';
import DropdownMenu from '../components/Dropdown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Relatorio() {
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const navegar = useNavigate();
  useEffect(()=>{JSON.stringify(usuarioAtual)==="{}"?navegar("/"):null;},[]);
  return (
    <main className="main">
      <DropdownMenu/>
      <Logo/>
    </main>
  )
}