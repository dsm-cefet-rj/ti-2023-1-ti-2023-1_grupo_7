import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import '../styles/NovoAtivo.css';
import Modal from "../components/Modal";
import { colocaAtivoCarteira } from "../slices/CarteiraAtualSlice";
import { updateCarteiraServer } from "../slices/CarteirasSlice";
import Ativo from "../components/AtivoBusca";

export default function NovoAtivo(){

    const dispatch = useDispatch();
    const carteiraAtual = useSelector(state=>state.carteiraAtual);
    const ativos = useSelector(state=>state.ativos);
    const data = new Date();

    const [id, setId] = useState('');
    const [quantidade, setQtd] = useState('');
    const [varios,setVarios] = useState(false);

    const nextID = useSelector(state=>state.ativos).map((a)=>a.id);
    nextID.sort().reverse();

/*esta função permite adicionar o ativo pelo seu id e quantidade informados na carteira atual assim como na respectiva carteira na lista de carteiras*/
    const addAtivo_ = (IDativo,quantidade)=>{

        let novo_ativo = {id:carteiraAtual.ativos.length>0?carteiraAtual.ativos.map((a)=>a.id).reduce((x, y) => Math.max(x,y))+1:1,id_ativo:IDativo,qnt:quantidade,dia:data.getDate(),mes:data.getMonth()+1,ano:data.getFullYear()};
        dispatch(colocaAtivoCarteira({id:carteiraAtual.id,ativo:novo_ativo}));
        dispatch(updateCarteiraServer({id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.concat([novo_ativo])}));
    }

    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setId('');
        setQtd('');
        addAtivo_(+id, +quantidade);
        varios?null:setOpenModal(false);
    }

    return(
        <div className='dropdownAtivo'>
            <button id="novoAtivoButton" onClick={() => {setOpenModal(true);setId('')}}>Novo Ativo</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                {/* children */}
                <>
                {(<div className="lista_ativo">{ativos.filter((a)=>{return id === '' ?true:a.id===id}).map((element,i)=><Ativo key={i} data={{...element,qnt:1}} select={()=>setId(element.id)}/>)}</div>)}
                <form id="formulario2"onSubmit={handleSubmit}>
                    <br/>
            <br/>
            <br/>
            <label>
                Quantidade: 
                <input type="number" className="input_" name="valor" min={1} value={quantidade} onChange={(e) => setQtd(e.target.value)}   />
            </label>
            <br/>
            <br/>
            <label>
                Adicionar vários?
                <input type="checkbox" className="input_" value={varios} onChange={() => setVarios(!varios) }   />
            </label>
            <br/>
            <input type="submit" className="salvar" value="Salvar"     />
            </form>
            </>
            </Modal>
        </div>
    )
}