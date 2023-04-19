"use client"
import Logo from '../components/Logo'
import './Home.css'
import NavBar from "../components/NavBar"
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'
import Rotas from '../components/routes'
import Acoes from './Acoes'
import DropdownMenu from '../components/Dropdown'


export default function Home() {
  return (
    <main className="main">
      <Logo/>
      <DropdownMenu/>
      <Doughnut/>
      <ListaAtivos Carteira={[9,1,4,34,15,41,25,1]}/>
 
      <NavBar/>
    </main>
  )
}
