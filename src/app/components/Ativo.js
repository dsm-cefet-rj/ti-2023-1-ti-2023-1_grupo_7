import React from "react";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { Inter } from 'next/font/google';

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
function Ativo (props){
    return(
      <div className="ativo">
        <h2 className={inter.className}>{props.data.nome}</h2>
        <h2 className={inter.className} id='preco'>R${props.data.valor}</h2>
        <h2 className={inter.className} id='quantidade'>{props.data.qnt}</h2>
      </div>
    )
}

export default Ativo;