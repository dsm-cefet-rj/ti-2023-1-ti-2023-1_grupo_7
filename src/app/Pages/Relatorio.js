import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import {Link} from 'react-router-dom';
import React from 'react';

export default function Relatorio() {
  return (
    <main className="main">
        <Link to = '/inicio'><div>Voltar</div></Link>
      <Logo/>
      <Doughnut/>
    </main>
  )
}