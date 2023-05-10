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
  -Sinalização mais clara que o usuário foi registrado
  -Interagir com o banco de dados usando Redux
  -Detalhes de UI(menu em todas as telas, não regarregar o gráfico ao trocar estados da lista pela NavBar)
  -Interfaces (tela principal com ativos pra ver, tirar e botar na carteira, tela pra alternar, criar e apagar carteiras, login do admin com ferramenta de CRUD dos ativos no mercado)
  -Relatórios
  -Corrigir o erro 404

Links:
  -https://github.com/diogosmendonca/pragmapm
  -https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually <--possível solução pro erro 404
*/

//ativos será a lista de ativos disponíveis no mercado
//carteiras será a lista de todas as carteiras existentes
//usuários será a listagem de usuários cadastrados

function App(){  
    return(
      <Provider store={store}>
        <Router>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
              <Route path="/ativo" element={<Home/>}/>
              <Route path="/ativo/novoativo" element={<NovoAtivo/>}/>
              <Route path="/conta" element={<Conta/>}/>
              <Route path="/relatorio" element={<Relatorio/>}/>
              <Route path="/carteiras" element={<ListaCarteiras/>}/>
            </Routes>
        </Router>
      </Provider>
    );
}

export default App;