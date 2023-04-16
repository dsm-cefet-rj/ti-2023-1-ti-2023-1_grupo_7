"use client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Acoes from './Pages/Acoes';
import Fi from './Pages/Fi';
import RendaFixa from './Pages/RendaFixa';
import Proventos from './Pages/Proventos';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Conta from './Pages/Conta';
import Relatorio from './Pages/Relatorio';
import ListaCarteiras from './Pages/ListaCarteiras';

function App(){
    return(
<Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/inicio" element={<Home/>}/>
        <Route path="/acoes" element={<Acoes/>}/>
        <Route path="/fi" element={<Fi/>}/>
        <Route path="/rendafixa" element={<RendaFixa/>}/>
        <Route path="/proventos" element={<Proventos/>}/>
        <Route path="/conta" element={<Conta/>}/>
        <Route path="/relatorio" element={<Relatorio/>}/>
        <Route path="/listaCarteiras" element={<ListaCarteiras/>}/>
      </Routes>
    </Router>
    );
}

export default App;