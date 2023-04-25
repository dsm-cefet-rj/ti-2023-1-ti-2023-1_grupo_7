import React from "react";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { Inter } from 'next/font/google';
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] });
const data = (
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
};
function getId(tipo){
  switch(tipo){
    case "Renda Fixa":
      return("rendaFixa");
    case "Fundo Imobiliário":
      return ("fundoImobiliario");
    case "Provento":
      return ("provento");
  }
  return null;
}


function Ativo (props){
  const [isDeleted,setDeleted]=useState(false);
    const sendDataToParent = () => {
      props.onData(props.ID);
    }
    return(
      <div className="ativo" id={getId(props.data.tipo)} onClick={sendDataToParent}>
        <h2 className={inter.className}>{props.data.nome}</h2>
        <h2 className={inter.className} id='preco'>R${props.data.valor}</h2>
        <h2 className={inter.className} id='quantidade'>{props.data.qnt}</h2>
      </div>
    )
}

export default Ativo;