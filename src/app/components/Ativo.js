import React from "react";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ['latin'] });
/*const data = (
  label,
  valor_atual,
  valor_investido,
  rentabilidade,
  rentabiliade_porcentagem,
  pm,
  cor
) => {
  const arr = [];
  return <React.Fragment></React.Fragment>;
};*/
const getId={
    "Renda Fixa": "rendaFixa",
    "Fundo Imobiliário":"fundoImobiliario",
    "Provento":"provento"
  }

function Ativo (props){
  const dispatch = useDispatch();
  const carteiraAtual = useSelector(state=>state.carteiraAtual);
  function deleteAtivo(){
    dispatch({type:"remove_ativo_da_carteira",payload:{ativo:props.data.id,carteira:carteiraAtual.id}});
  }
    return(
      <div className="ativo" id={getId[props.data.tipo]} onClick={deleteAtivo}>
        <h2 className={inter.className}>{props.data.nome}</h2>
        <h2 className={inter.className} id='preco'>R${props.data.valor}</h2>
        <h2 className={inter.className} id='quantidade'>{props.data.qnt}</h2>
      </div>
    )
}

export default Ativo;