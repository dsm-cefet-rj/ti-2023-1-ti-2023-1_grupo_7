"use client"
import Logo from '../components/Logo'
import './Home.css'
import NavBar from "../components/NavBar"
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'
import Rotas from '../components/routes'
import Acoes from './Acoes'


export default function Home() {
  return (
    <main className="main">
      <Logo/>
      <div style={{height:170}}/>

      <Doughnut/>
      <ListaAtivos/>
      <ListaAtivos/> 
      <NavBar/>
      
      
    </main>
  )
}
