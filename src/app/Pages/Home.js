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


export default function Home(props) {
  //esse use state é temporário e deve ser substituído pela informação do usuário logado
  //essa informação deve ser resgatada da variável de estado "email" em ambos CadastroC.js e LoginC.js
  const placeHolder = {"carteiras":[]};
  return(
  <main className="main">
    <ListaAtivos tipo={props.pagina} ativos={props.ativos} setAtivos={props.setAtivos}/>
  </main>
  )
  return (
    <main className="main">
      <Logo/>
      <DropdownMenu/>
      <Doughnut/>
      <ListaAtivos tipo={props.pagina}/>
      <NavBar/>
    </main>
  )
}
