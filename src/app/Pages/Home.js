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
  const [db, setDB] = useState([]);
  
  useEffect(() => {
  fetch('http://localhost:1000/carteira')
    .then(T => T.json())
    .then(data=>{setDB(data);});},[]);

  return (
    <main className="main">
      <Logo/>
      <DropdownMenu/>
      <Doughnut data={db}/>
      <ListaAtivos Carteira={db} tipo={props.pagina}/>
      <NavBar/>
    </main>
  )
}
