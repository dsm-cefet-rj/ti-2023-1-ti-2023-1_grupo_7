import Logo from '../components/Logo';
import {Link,useLocation} from 'react-router-dom';
import React from 'react';

export default function Conta() {
  const usuario = useLocation().state;
  return (
    <main className="main">
        <Link to = '/inicio' state={usuario}><div>Voltar</div></Link>
        <Logo/>
    </main>
  )
}