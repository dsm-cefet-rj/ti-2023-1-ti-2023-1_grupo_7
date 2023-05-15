import React, { useState } from "react";
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
  const [isOpen,setIsOpen]=useState(false);
  const [edit,setEdit] = useState(false);
  const [qnt,setQnt] = useState(null);
  function toggle(){
    setIsOpen(!isOpen);
  }
  function deleteAtivo(){
    dispatch({type:"remove_ativo_da_carteira",payload:{ativo:props.data.id,carteira:carteiraAtual.id}});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let novosAtivos = carteiraAtual.ativos.slice();
    novosAtivos.splice(carteiraAtual.ativos.map((a)=>a.id).indexOf(props.data.id),1,{id:props.data.id,qnt:qnt});
    dispatch({type:"atualizar_carteiraAtual",
    payload:{id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:novosAtivos}});
    setEdit(false);
  }
  const renderMenu = ()=>{
    return isOpen?
    (<div className="ativo" id="editMenu">
      <h2 onClick={()=>{deleteAtivo()}}>deletar</h2>
      <h2 onClick={(e)=>{setEdit(!edit);e.stopPropagation();}}>{edit?'cancelar':'editar'}</h2>
    </div>):
    null;
  }
    return(
      <div className="ativo" id={getId[props.data.tipo]} onClick={toggle}>
        <h2 className={inter.className}>{props.data.nome}</h2>
        <h2 className={inter.className} id='centro'>R${props.data.valor}</h2>
        {edit?/*OBS: a alteração está sendo aplicada apenas na carteiraAtual e não se reflete na lista de carteiras, isso pd levar à desincronia do Banco de Dados futuramente*/
        (<form onSubmit={handleSubmit}><input required value={qnt} onChange={(e)=>{setQnt(+e.target.value)}} type="number" min={1}></input><button type="submit">OK</button></form>):
        (<h2 className={inter.className} id='centro'>{props.data.qnt}</h2>)}
        <h2 className={inter.className}>R${props.data.qnt*props.data.valor}</h2>
        {renderMenu()}
      </div>
    )
}

export default Ativo;