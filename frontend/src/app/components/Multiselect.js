import { elements } from 'chart.js';
import React from 'react';
import { useSelector } from 'react-redux';
import { usuarioAtualSlice } from '../slices/UsuarioAtualSlice';

const Multiselect = (props) => {
  const carteiras = useSelector(state=>state.carteiras);
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const handleSelectChange = (event) => {
    props.setter(event.target.value);
  };
  const __getOpcoes = ()=>{
        return carteiras.filter((c)=>c.email===usuarioAtual.id).map((element,i)=><option key={i} value={element.id}>{element.nome}</option>)
  }

  return (
    <div>
      <label>Selecione uma carteira:</label>
      <select value={props.carteiraSelecionada} onChange={handleSelectChange}>
        <option value="">-- Nada selecionado --</option>
        {__getOpcoes()}
      </select>
    </div>
  );
};

export default Multiselect;