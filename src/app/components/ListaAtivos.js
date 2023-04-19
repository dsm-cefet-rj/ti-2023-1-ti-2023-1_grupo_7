
import {React, useState} from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";

const inter = Inter({ subsets: ['latin'] })

function getAtivos(array){
    const lista = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        lista.push(<Ativo key={i}/>)
    }
    return (
        <div style={{overflowY: 'auto', height:'35vh',paddingRight:'10px'}}>
            {lista}
        </div>
    )
}

const ListaAtivos = (props) => {

    
    return(
        <>
            <h2 className={inter.className} style={{marginBottom:'10px',width:'60vw'}}>
                Lista de Ativos
            </h2>
            {getAtivos(props.Carteira)}
        </>
    )
}

export default ListaAtivos;