"use client"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Conta from './Pages/Conta';
import Relatorio from './Pages/Relatorio';
import ListaCarteiras from './Pages/ListaCarteiras';
import {store} from './store';
import { Provider } from 'react-redux';
import NovoAtivo from './Pages/NovoAtivo';

/*
Listinha do que fazer:
  -Interagir com o banco de dados usando Redux async thunk
  -Interfaces (login do admin com ferramenta de CRUD dos ativos no mercado)
  -Perfil de investimento
  -Relatórios
  -Corrigir o erro 404 (requer backend)
  -fazer o backend

Links:
  -https://github.com/diogosmendonca/pragmapm
  -https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually <--possível solução pro erro 404
*/

//ativos é a lista de ativos disponíveis no mercado
//carteiras é a lista de todas as carteiras existentes
//usuários é a listagem de usuários cadastrados

function App(){  
    return(
      <Provider store={store}>
        <Router>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
              <Route path="/ativos" element={<Home/>}/>
              <Route path="/ativos/novoativo" element={<NovoAtivo/>}/>
              <Route path="/conta" element={<Conta/>}/>
              <Route path="/relatorio" element={<Relatorio/>}/>
              <Route path="/carteiras" element={<ListaCarteiras/>}/>
            </Routes>
        </Router>
      </Provider>
    );
}

export default App;