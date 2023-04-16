import Logo from '../components/Logo'
import ListaAtivos from '../components/ListaAtivos'
import {Link} from 'react-router-dom';


export default function ListaCarteiras() {
  return (
    <main className="main">
      <Link to = '/inicio'><div>Voltar</div></Link>
      <Logo/>
      <ListaAtivos/>
    </main>
  )
}