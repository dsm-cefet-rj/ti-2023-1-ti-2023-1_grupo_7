"use client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Acoes from './Pages/Acoes';
import Fi from './Pages/Fi';
import RendaFixa from './Pages/RendaFixa';
import Proventos from './Pages/Proventos';

function App(){
    return(
<Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/acoes" element={<Acoes/>}/>
        <Route path="/fi" element={<Fi/>}/>
        <Route path="/rendafixa" element={<RendaFixa/>}/>
        <Route path="/proventos" element={<Proventos/>}/>
      </Routes>
    </Router>
    );
}

export default App;