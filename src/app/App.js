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

/*
Vai ter q mudar pro redux e aí adicionar as carteiras e ativos
nesse redux pra ter um CRUD pronto, daí é só se virar com a UI
disso td, e refatorar o código pra acomodar o redux sendo global,
toma aqui uma listinha:
  -Redux
  -Refatorar código pra Redux
  -Testar se ainda funciona
  -Carteiras e Ativos com Redux
  -Interfaces (tela principal com ativos pra ver, tirar e botar na carteira, tela pra alternar, criar e apagar carteiras, login do admin com ferramenta de CRUD dos ativos no mercado)
  -Relatórios

Links:
  -https://github.com/diogosmendonca/pragmapm
  -https://www.youtube.com/watch?v=7-JZ7IkgUKo&list=PLijZucELEeolGZnrK9kddbUi8YilwHnwO&index=20 <-- vídeo passando para Redux
  -https://github.com/diogosmendonca/pragmapm/commit/0b4753ed65df058977df633aafa9d728745aa85e <--esse link em específico é o de adição do Redux
*/

function App(){

  function ativosReducer(ativos /*state*/, action ){
    switch(action.type){
      case 'add_ativo': /* payload: ativo */
        //cria um novo array com os ids dos ativos e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
        let proxId = 1 + ativos.map(a => a.id).reduce((x, y) => Math.max(x,y));
        return ativos.concat([{...action.payload, id: proxId}]);
      case 'update_ativo': /* payload: ativo */
        //cria um novo array com os ids dos ativos e nele busca a posição do id do payload
        let index = ativos.map(a => a.id).indexOf(action.payload.id);
        //copia ativos
        let ativosUpdated = ativos.slice();
        //substitui 1 ativo no index pelo conteúdo do payload
        ativosUpdated.splice(index, 1, action.payload);
        return ativosUpdated;
      case 'delete_ativo': /* payload: id */
        //filtra o ativo q tem o id igual ao payload
        return ativos.filter((a) => a.id !== action.payload);
      case 'load_ativo': /* payload: array de ativos */
        //torna ativos o array vindo no payload
        return action.payload;
      default:
        throw new Error();
    }
  }

  const [db, setDB] = useState([]);//db serão os usuários
  const [ativos,dispatch] = useReducer(ativosReducer,[]);//ativos será a lidta de ativos disponíveis no mercado
  const [carteiras,setCarteiras] = useState([]);//carteiras será a lista de todas as carteiras existentes
  
/*aqui vai entrar o const store=configureStore({reducer:{ativos:ativosReducer,carteiras:carteirasReducer,usuarios:usuariosReducer}})
mas pfv não esquce de fazer os novos reducers dps de testar com o 1 q tá funcionando*/

/*vamos ter que cortar as variáveis de estado pra fora do componente, então logo aqui a gnt põe function App(){*/

  useEffect(() => {
    fetch('http://localhost:5000/usuarios')
      .then(T => T.json())
      .then(data=>{setDB(data);});},[]);
  useEffect(() => {
    fetch('http://localhost:5000/ativos')
      .then(T => T.json())
      .then(data=>{dispatch({type:'load_ativo',payload:data});});},[]);
  useEffect(() => {
      fetch('http://localhost:5000/carteiras')
        .then(T => T.json())
        .then(data=>{setCarteiras(data);});},[]);
  console.log(ativos);

  

    return(
      /*vamos envolver isso num <Provider store={store}>
      além disso tbm vamos parar de passar atributos por props*/
<Router>
      <Routes>
        <Route path="/" element={<Login db={db} setDB={setDB}/>}/>
        <Route path="/cadastro" element={<Cadastro db={db} setDB={setDB}/>}/>
        <Route path="/inicio" element={<Home db={db} setDB={setDB} ativos={ativos} setAtivos={dispatch}/>}/>
        <Route path="/acoes" element={<Acoes db={db} setDB={setDB} ativos={ativos} setAtivos={dispatch}/>}/>
        <Route path="/fi" element={<Fi db={db} setDB={setDB} ativos={ativos} setAtivos={dispatch}/>}/>
        <Route path="/rendafixa" element={<RendaFixa db={db} setDB={setDB} ativos={ativos}/>}/>
        <Route path="/proventos" element={<Proventos db={db} setDB={setDB} ativos={ativos}/>}/>
        <Route path="/conta" element={<Conta db={db} setDB={setDB}/>}/>
        <Route path="/relatorio" element={<Relatorio db={db} setDB={setDB}/>}/>
        <Route path="/listaCarteiras" element={<ListaCarteiras db={db} setDB={setDB}/>}/>
      </Routes>
    </Router>
    );
}

export default App;