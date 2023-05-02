import {React, useEffect} from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "./form/Button";

const inter = Inter({ subsets: ['latin'] })


const ListaAtivos = (props) => {

    const ativos = useSelector(state=>state.ativos).filter((a)=>{return props.filtro.map(c=>c.id).includes(a.id)});
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('http://localhost:5000/ativos')
          .then(T => T.json())
          .then(data=>{dispatch({type:"load_ativo",payload:data});});},[useLocation]);
    const CRUDativos={
        "delete":deleteAtivo,
        "add":addAtivo
        /*aqui entrará o código de dispatch*/
    }
    function deleteAtivo(id){
        dispatch({type:"delete_ativo",payload:id});
    }
    function addAtivo(id){
        dispatch({type:"add_ativo", payload:id});
    }
    function __getAtivos(){
        return typeof props.tipo===typeof undefined?
        (<div className="lista">{ativos.map((element,i)=><Ativo key={i} data={{...element,qnt:props.filtro[props.filtro.map((a)=>a.id).indexOf(element.id)].qnt}} deleteAtivo={event=>deleteAtivo(element.id)}/>)}</div>):
        (<div className="lista">{ativos.filter((element)=>{return element.tipo===props.tipo}).map((element,i)=><Ativo key={i} data={{...element,qnt:props.filtro[props.filtro.map((a)=>a.id).indexOf(element.id)].qnt}} deleteAtivo={event=>deleteAtivo(element.id)}/>)}</div>);
    }

    function botao(id){
        return(<div className="botao"><button onClick={addAtivo(id)}></button></div>)
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
                <h3 className={inter.className} id="preco">Valor</h3>
                <h3 className={inter.className} id="quantidade">Quantidade</h3>
            </div>
            {__getAtivos()}
        </>
    )
}

export default ListaAtivos;