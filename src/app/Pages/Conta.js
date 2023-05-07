import Logo from '../components/Logo';
import {Link,useLocation} from 'react-router-dom';
import React from 'react';
import DropdownMenu from '../components/Dropdown';

export default function Conta() {
  const usuario = useLocation().state;
  return (
    <main className="main">
        <DropdownMenu/>
        <Logo/>
    </main>
  )
}