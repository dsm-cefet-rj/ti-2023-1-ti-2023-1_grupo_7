import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import { BsFillBarChartLineFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import DropdownMenu from '../components/Dropdown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Multiselect from '../components/Multiselect';
import Distribuicao from '../components/Distribuicao';
import Graphic from '../components/Graphic';

export default function Relatorio() {
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const carteiras  = useSelector(state=>state.carteiras);
  const navegar = useNavigate();
  useEffect(()=>{JSON.stringify(usuarioAtual)==="{}"?navegar("/"):null;},[]);
  
  const [carteiraSelecionada, setCarteiraSelecionada] = useState("");

  return (
    <main className="main">
      <DropdownMenu/>
      <Logo/>
      <Multiselect setter={setCarteiraSelecionada} carteiraSelecionada={carteiraSelecionada}/>
      {carteiraSelecionada===""?null:(<>
      <Distribuicao ativos={carteiras[carteiras.map((c)=>c.id).indexOf(+carteiraSelecionada)].ativos}/>
      <Graphic carteiraSelecionada={carteiraSelecionada}/>
      </>)}
    </main>
  )
}