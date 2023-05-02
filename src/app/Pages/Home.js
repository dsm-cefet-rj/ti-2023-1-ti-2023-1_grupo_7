"use client"
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


export default function Home(props) {
  const carteiraAtual=useSelector(state=>state.carteiraAtual);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:5000/carteiras')
      .then(T => T.json())
      .then(data=>{dispatch({type:"load_carteira",payload:data});});},[useLocation]);
  
  return (
    <main className="main">
      <Logo/>
      <DropdownMenu/>
      <Doughnut filtro={carteiraAtual.ativos}/>
      <ListaAtivos tipo={props.pagina} filtro={carteiraAtual.ativos}/>
      <NavBar/>
    </main>
  )
}
