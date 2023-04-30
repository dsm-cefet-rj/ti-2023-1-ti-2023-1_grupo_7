import Logo from '../components/Logo'
import ListaAtivos from '../components/ListaAtivos'
import {Link,useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react'


export default function ListaCarteiras(props) {

  const placeHolder = {"carteira":[]};

  return (
    <main className="main">
      <Link to = '/inicio' state={usuario}><div>Voltar</div></Link>
      <Logo/>
      <ListaAtivos data={typeof props.db[usuario]===typeof undefined ? placeHolder:props.db[usuario]}/>
    </main>
  )
}