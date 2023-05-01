"use client"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { useState, useEffect, useReducer} from 'react';
import {store} from './store';
import { Provider } from 'react-redux';

/*
Vai ter q adicionar as carteiras e usuários no redux pra ter um CRUD pronto,
daí é só se virar com a UI disso td toma aqui uma listinha:
  -Testar se ainda funciona
  -Carteiras e Usuários com Redux
  -Interfaces (tela principal com ativos pra ver, tirar e botar na carteira, tela pra alternar, criar e apagar carteiras, login do admin com ferramenta de CRUD dos ativos no mercado)
  -Relatórios

Links:
  -https://github.com/diogosmendonca/pragmapm
  -https://www.youtube.com/watch?v=7-JZ7IkgUKo&list=PLijZucELEeolGZnrK9kddbUi8YilwHnwO&index=20 <-- vídeo passando para Redux
  -https://github.com/diogosmendonca/pragmapm/commit/0b4753ed65df058977df633aafa9d728745aa85e <--esse link em específico é o de adição do Redux
*/

//ativos será a lista de ativos disponíveis no mercado
//carteiras será a lista de todas as carteiras existentes

function App(){  
    return(
      <Provider store={store}>
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
      </Provider>
    );
}

export default App;