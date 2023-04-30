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
Como eu sei q eu vou esquecer oq eu tenho pra fzr,
olá futuro eu vc se fudeu, kkk rimas à parte vc
vai ter q adicionar uma função de reducer aqui
no App.js pra db dps se tudo correr bem mudar
pro redux e aí adicionar as carteiras e ativos
nesse redux pra ter um CRUD pronto, daí é só
se virar com a UI disso td, toma aqui uma listinha:
  -Reducer
  -Redux
  -Carteiras e Ativos com Redux
  -Interfaces (tela principal com ativos pra ver, tirar e botar a carteira, tela pra alternar, criar e apagar carteiras, login do admin com ferramenta de CRUD dos ativos no mercado)
  -Relatórios

Links:
  -https://github.com/diogosmendonca/pragmapm
  -https://www.youtube.com/watch?v=7-JZ7IkgUKo&list=PLijZucELEeolGZnrK9kddbUi8YilwHnwO&index=20&ab_channel=DiogoSilveiraMendon%C3%A7a
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