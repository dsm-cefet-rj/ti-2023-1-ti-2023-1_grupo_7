import '../styles/Acoes.css'
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'

export default function Acoes() {
  return (
    <div className="main">
      <Logo/>
      <div style={{height:170}}/>
      <Doughnut />
      <NavBar/>
    </div>
  )
}