"use client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Conta from './Pages/Conta';
import Relatorio from './Pages/Relatorio';
import ListaCarteiras from './Pages/ListaCarteiras';
import Redirecionador from './Pages/Redirecionador';
import {store} from './store';
import { Provider } from 'react-redux';
import NovoAtivo from './Pages/NovoAtivo';
import { fetchCarteiras } from './slices/CarteirasSlice';
import { fetchAtivos } from './slices/AtivosSlice';
import { fetchUsuarios } from './slices/UsuariosSlice';

/*
Listinha do que fazer:
  -Relatórios

Links:
  -https://github.com/diogosmendonca/pragmapm
*/

//ativos é a lista de ativos disponíveis no mercado
//carteiras é a lista de todas as carteiras existentes
//usuários é a listagem de usuários cadastrados

store.dispatch(fetchUsuarios());
store.dispatch(fetchAtivos());
store.dispatch(fetchCarteiras());

function App(){

    return(
      <Provider store={store}>
        <Router>
            <Routes>
              <Route path="/" element={<Redirecionador/>}/>
              <Route path="/login" element={<Login/>}/>
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