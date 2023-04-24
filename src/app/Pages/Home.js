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


export default function Home(props) {
  //esse use state é temporário e deve ser substituído pela informação do usuário logado
  //essa informação deve ser resgatada da variável de estado "email" em ambos CadastroC.js e LoginC.js
  const [usuario,setUsuario] = useState("jason@gmail.com");
  const [db, setDB] = useState({});
  
  useEffect(() => {
    fetch('http://localhost:1000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);

  return (
    <main className="main">
      <Logo/>
      <DropdownMenu/>
      <Doughnut data={typeof db[usuario]===typeof undefined ? []:db[usuario].carteira}/>
      <ListaAtivos Carteira={typeof db[usuario]===typeof undefined ? []:db[usuario].carteira} tipo={props.pagina}/>
      <NavBar/>
    </main>
  )
}
