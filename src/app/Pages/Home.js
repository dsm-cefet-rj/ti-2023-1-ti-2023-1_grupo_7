"use client"
import Logo from '../components/Logo'
import '../styles/Home.css'
import NavBar from "../components/NavBar"
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'
import DropdownMenu from '../components/Dropdown'
import { CreateSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function Home(props) {
  //esse use state é temporário e deve ser substituído pela informação do usuário logado
  //essa informação deve ser resgatada da variável de estado "email" em ambos CadastroC.js e LoginC.js
  const usuario = useLocation().state;
  const [db, setDB] = useState({});
  const placeHolder = {"carteira":[]};
  
  useEffect(() => {
    fetch('http://localhost:1000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);

  return (
    <main className="main">
      <Logo/>
      <DropdownMenu/>
      <Doughnut data={typeof db[usuario]===typeof undefined ? []:db[usuario].carteira}/>
      <ListaAtivos data={typeof db[usuario]===typeof undefined ? placeHolder:db[usuario]} tipo={props.pagina}/>
      <NavBar/>
    </main>
  )
}
