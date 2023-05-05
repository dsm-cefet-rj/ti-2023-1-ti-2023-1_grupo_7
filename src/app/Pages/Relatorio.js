import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import {Link,useLocation} from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Relatorio(props) {
  return (
    <main className="main">
        <Link to = '/inicio' state={usuario}><div>Voltar</div></Link>
      <Logo/>
    </main>
  )
}