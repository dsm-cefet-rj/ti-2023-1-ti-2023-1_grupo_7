"use client"
import Logo from '../components/Logo'
import './Home.css'
import NavBar from "../components/NavBar"
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'
import Router from '../routes'
import Acoes from './Acoes'


export default function Home() {
  return (
    <main className="main">
      <Logo/>
      <div style={{height:170}}/>

      {/*<Router/>*/}
      <Acoes/>

      <NavBar/>
    </main>
  )
}
