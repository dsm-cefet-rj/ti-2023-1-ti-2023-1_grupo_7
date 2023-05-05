import React from "react";
import { Inter } from 'next/font/google';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ['latin'] });

function Carteira(props){
    const navegar = useNavigate();
    const dispatch = useDispatch();
    const handleSelection = ()=>{
      dispatch({type:"atualizar_carteiraAtual",payload:props.data});
      navegar("/inicio");
    }
    return(
      <div className="ativo">
        <h2 className={inter.className} onClick={handleSelection}>{props.data.nome}</h2>
        <h2 className={inter.className} id='preco'></h2>
        <button className={inter.className} id='quantidade'onClick={props.deleteCarteira}>Excluir</button>
      </div>
    )
}

export default Carteira;