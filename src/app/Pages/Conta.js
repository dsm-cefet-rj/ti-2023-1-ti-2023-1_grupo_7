import Logo from '../components/Logo';
import {Link} from 'react-router-dom';
import React from 'react';

export default function Conta() {
  return (
    <main className="main">
        <Link to = '/inicio'><div>Voltar</div></Link>
        <Logo/>
    </main>
  )
}