import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PopupForm() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [nome, setNome] = useState('');
  const usuarioAtual = useSelector(state=>state.usuarioAtual);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type:"add_carteira",payload:{email:usuarioAtual.id,nome:nome,ativos:[]}});
    //dispatch({type:"update_usuario",payload:{usuarioAtual/*modificações aqui para adicionar o id da carteira nas carteiras do usuário, lembre de também atualizar o usuário atual*/}});
    setIsPopupOpen(false);
    setNome("");
  };

  return (
    <div style={{position:"absolute",right:"5vw",top:"5vh"}}>
      <button onClick={() => setIsPopupOpen(true)}>+</button>
      {isPopupOpen && (
        <div className="popup-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PopupForm;
