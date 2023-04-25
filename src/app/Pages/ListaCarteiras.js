import Logo from '../components/Logo'
import ListaAtivos from '../components/ListaAtivos'
import {Link,useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react'


export default function ListaCarteiras() {
  const usuario = useLocation().state;
  const [db, setDB] = useState({});
  const placeHolder = {"carteira":[]};
  useEffect(() => {
    fetch('http://localhost:1000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);

  return (
    <main className="main">
      <Link to = '/inicio' state={usuario}><div>Voltar</div></Link>
      <Logo/>
      <ListaAtivos data={typeof db[usuario]===typeof undefined ? placeHolder:db[usuario]}/>
    </main>
  )
}