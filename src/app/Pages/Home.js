import Logo from '../components/Logo';
import '../styles/Home.css';
import NavBar from "../components/NavBar";
import Doughnut from "../components/Doghnut";
import ListaAtivos from '../components/ListaAtivos';
import DropdownMenu from '../components/Dropdown';
import { useSelector } from 'react-redux';
import NovoAtivo from './NovoAtivo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navegar = useNavigate();
  const[tipo,setTipo] = useState(undefined);
  const carteiraAtual = useSelector(state=>state.carteiraAtual);
  useEffect(()=>{JSON.stringify(carteiraAtual)==="{}"?navegar("/carteiras"):null;},[]);

  return (
    <main className="main">
      <Logo/>
      <Doughnut/>
      <ListaAtivos tipo={tipo}/>
      <NavBar troca={setTipo}/>
      <NovoAtivo/>
      <DropdownMenu/>
    </main>
  )
}
