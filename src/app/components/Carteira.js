import React from "react";
import { Inter } from 'next/font/google';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ['latin'] });

function Carteira(props){
    const navegar = useNavigate();
    const dispatch = useDispatch();
    const carteiraAtual = useSelector(state=>state.carteiraAtual);
    const handleSelection = ()=>{
        navegar("/inicio");
        dispatch({type:"atualizar_carteiraAtual",payload:props.data});
    }
    return(
      <div className="ativo">
        <h2 className={inter.className} onClick={handleSelection}>{props.data.nome}</h2>
        <h2 className={inter.className} id='preco'></h2>
        <button className={inter.className} id='quantidade'onClick={props.deleteCarteira}>"lixeira"</button>
      </div>
    )
}

export default Carteira;