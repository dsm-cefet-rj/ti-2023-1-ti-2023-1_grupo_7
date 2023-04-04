import Logo from '../components/Logo'
import '../styles/RendaFixa.css'
import NavBar from "../components/NavBar"
//import Doughnut from "../components/Doghnut"

export default function RendaFixa() {
  return (
    <main className="main">
      <Logo/>
      <div style={{height:170}}/>
      <NavBar/>
    </main>
  )
}