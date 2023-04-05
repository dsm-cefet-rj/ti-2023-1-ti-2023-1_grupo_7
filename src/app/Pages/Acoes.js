import '../styles/Acoes.css'
import Doughnut from "../components/Doghnut"
import ListaAtivos from '../components/ListaAtivos'

export default function Acoes() {
  return (
    <div className="main">
      <Doughnut />
      <ListaAtivos/>
    </div>
  )
}