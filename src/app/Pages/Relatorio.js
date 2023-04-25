import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import {Link,useLocation} from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Relatorio() {
  const usuario = useLocation().state;
  const [db, setDB] = useState({});
  
  useEffect(() => {
    fetch('http://localhost:1000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);
  return (
    <main className="main">
        <Link to = '/inicio' state={usuario}><div>Voltar</div></Link>
      <Logo/>
      <Doughnut data={typeof db[usuario]===typeof undefined ? []:db[usuario].carteira}/>
    </main>
  )
}