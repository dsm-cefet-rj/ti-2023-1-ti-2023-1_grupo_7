"use client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Acoes from './Pages/Acoes';
import Fi from './Pages/Fi';
import RendaFixa from './Pages/RendaFixa';
import Proventos from './Pages/Proventos';
import Login from './components/form/LoginC';
import Logi from './Pages/Login';
import Cadastro from './Pages/Cadastro';

function App(){
    return(
<Router>
      <Routes>
        <Route path="/" element={<Logi/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/inicio" element={<Home/>}/>
        <Route path="/acoes" element={<Acoes/>}/>
        <Route path="/fi" element={<Fi/>}/>
        <Route path="/rendafixa" element={<RendaFixa/>}/>
        <Route path="/proventos" element={<Proventos/>}/>
      </Routes>
    </Router>
    );
}

export default App;