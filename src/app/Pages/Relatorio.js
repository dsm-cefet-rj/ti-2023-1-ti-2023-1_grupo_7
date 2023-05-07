import Logo from '../components/Logo';
import Doughnut from "../components/Doghnut";
import React from 'react';
import DropdownMenu from '../components/Dropdown';

export default function Relatorio(props) {
  return (
    <main className="main">
      <DropdownMenu/>
      <Logo/>
    </main>
  )
}