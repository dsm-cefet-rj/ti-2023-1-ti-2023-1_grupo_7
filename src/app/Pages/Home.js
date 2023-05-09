import Logo from '../components/Logo'
import '../styles/Home.css'
import NavBar from "../components/NavBar"
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'
import DropdownMenu from '../components/Dropdown'
import { CreateSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import DropdownAtivo from '../components/DropdownAtivo'
import NovoAtivo from './NovoAtivo'


export default function Home(props) {
  const carteiraAtual=useSelector(state=>state.carteiraAtual);
  const dispatch = useDispatch();
  /*useEffect(() => {
    fetch('http://localhost:5000/carteiras')
      .then(T => T.json())
      .then(data=>{dispatch({type:"load_carteira",payload:data});});},[useLocation]);*/
  const addAtivo = (IDativo,quantidade)=>{/*essa função permite adicionar o ativo pelo seu id e quantidade informados na carteira atual assim como na respectiva carteira na lista de carteiras*/
    dispatch({type:"coloca_ativo_na_carteira",payload:{id:carteiraAtual.id,ativo:{id:IDativo,qnt:quantidade}}})
  }
  return (
    <main className="main">
      <Logo/>
      <NovoAtivo/>
      <DropdownMenu/>
      <Doughnut/>
      <ListaAtivos tipo={props.pagina}/>
      <NavBar/>
    </main>
  )
}
