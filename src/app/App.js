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

function App(){



  const [db, setDB] = useState([]);//db serão os usuários
  //ativos será a lista de ativos disponíveis no mercado
  const [carteiras,setCarteiras] = useState([]);//carteiras será a lista de todas as carteiras existentes
  
/*aqui vai entrar o const store=configureStore({reducer:{ativos:ativosReducer,carteiras:carteirasReducer,usuarios:usuariosReducer}})
mas pfv não esquce de fazer os novos reducers dps de testar com o 1 q tá funcionando*/

/*vamos ter que cortar as variáveis de estado pra fora do componente, então logo aqui a gnt põe function App(){*/

  useEffect(() => {
    fetch('http://localhost:5000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);
  
  useEffect(() => {
      fetch('http://localhost:5000/carteiras')
        .then(T => T.json())
        .then(data=>{setCarteiras(data);});},[]);

  
    return(
      <Provider store={store}>
        <Router>
            <Routes>
              <Route path="/" element={<Login db={db} setDB={setDB}/>}/>
              <Route path="/cadastro" element={<Cadastro db={db} setDB={setDB}/>}/>
              <Route path="/inicio" element={<Home db={db} setDB={setDB}/>}/>
              <Route path="/acoes" element={<Acoes db={db} setDB={setDB}/>}/>
              <Route path="/fi" element={<Fi db={db} setDB={setDB}/>}/>
              <Route path="/rendafixa" element={<RendaFixa db={db} setDB={setDB}/>}/>
              <Route path="/proventos" element={<Proventos db={db} setDB={setDB}/>}/>
              <Route path="/conta" element={<Conta db={db} setDB={setDB}/>}/>
              <Route path="/relatorio" element={<Relatorio db={db} setDB={setDB}/>}/>
              <Route path="/listaCarteiras" element={<ListaCarteiras db={db} setDB={setDB}/>}/>
            </Routes>
        </Router>
      </Provider>
    );
}

export default App;