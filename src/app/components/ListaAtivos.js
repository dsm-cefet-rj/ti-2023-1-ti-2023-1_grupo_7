
import {React, useState} from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";
import { useLocation } from "react-router-dom";

const inter = Inter({ subsets: ['latin'] })


const ListaAtivos = (props) => {

    const CRUDativo=(key)=>{
        /*aqui entrará o código de dispatch*/
    }
    function deleteAtivo(id){
        props.setAtivos({type:"delete_ativo",payload:id});
    }
    function __getAtivos(array,tipo){
        return typeof tipo===typeof undefined?
        (<div className="lista">{array.map((element,i)=><Ativo key={i} data={element} deleteAtivo={event=>deleteAtivo(element.id)}/>)}</div>):
        (<div className="lista">{array.filter((element)=>{return element.tipo===tipo}).map((element,i)=><Ativo key={i} data={element} deleteAtivo={event=>deleteAtivo(element.id)}/>)}</div>);
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
            {__getAtivos(props.ativos,props.tipo)}
        </>
    )
}

export default ListaAtivos;