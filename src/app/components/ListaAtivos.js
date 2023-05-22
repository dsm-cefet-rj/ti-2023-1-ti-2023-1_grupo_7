import {React, useEffect} from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ['latin'] })


const ListaAtivos = (props) => {

    const carteiraAtual = useSelector(state=>state.carteiraAtual);
    const ativos = useSelector(state=>state.ativos).filter((a)=>{return carteiraAtual.ativos.map(c=>c.id).includes(a.id)});
    const dispatch = useDispatch();
    const nextID = useSelector(state=>state.ativos).map((a)=>a.id);
    nextID.sort().reverse();
    /*useEffect(() => {
        fetch('http://localhost:5000/ativos')
          .then(T => T.json())
          .then(data=>{dispatch({type:"load_ativo",payload:{array:data,carteiraAtual:carteiraAtual}});});},[carteiraAtual]);*/
    
    function __getAtivos(){
        return typeof props.tipo===typeof undefined?
        (<div className="lista_ativo">{ativos.map((element,i)=><Ativo key={i} data={{...element,qnt:carteiraAtual.ativos[carteiraAtual.ativos.map((a)=>a.id).indexOf(element.id)].qnt}}/>)}</div>):
        (<div className="lista_ativo">{ativos.filter((element)=>{return element.tipo===props.tipo}).map((element,i)=><Ativo key={i} data={{...element,qnt:carteiraAtual.ativos[carteiraAtual.ativos.map((a)=>a.id).indexOf(element.id)].qnt}}/>)}</div>);
    }


    //isso só é mostrado qnd a carteira está vazia
    
    /*
    if(typeof props.data.carteiras[0]===typeof undefined){
        return(
            <h2 className={inter.className} id="placeHolder">
                Não encontramos nenhum ativo na sua carteira, tente adicionar algum
            </h2>)
    }*/
    
    //curso normal para uma carteira com pelo menos algo
    return(
        <>
            <h2 className={inter.className} id='nomeLista'>
                Lista de {typeof props.tipo===typeof undefined?'Ativos':props.tipo}
            </h2>
            <div className="titulo">
                <h3 className={inter.className}>Nome</h3>
                <h3 className={inter.className} id="esquerda">Valor</h3>
                <h3 className={inter.className} id="centro_2">Quantidade</h3>
                <h3 className={inter.className} id="centro">Total</h3>
            </div>
            {__getAtivos()}
            
        </>
    )
}

export default ListaAtivos;