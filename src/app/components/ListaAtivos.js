
import {React, useState} from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";

const inter = Inter({ subsets: ['latin'] })

function __getAtivos(array,tipo){
    const lista = []
    if(typeof tipo === typeof undefined){
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            lista.push(<Ativo key={i} data={element}/>)
        }
        return (
            <div className="lista">
                {lista}
            </div>
        )
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.tipo===tipo){
            lista.push(<Ativo key={i} data={element}/>)
        }
    }
    return (
        <div className="lista">
            {lista}
        </div>
    )
}

const ListaAtivos = (props) => {
    //isso só é mostrado qnd a carteira está vazia
    if (typeof props.data.carteira[0]===typeof undefined){
        return(
        <>
            <h2 className={inter.className} id="placeHolder">Não encontramos nenhum ativo na sua carteira, tente adicionar algum</h2>
            {/*insira aqui um botão para adicionar ativos*/}
        </>)
    }
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
            {__getAtivos(props.data.carteira,props.tipo)}
        </>
    )
}

export default ListaAtivos;