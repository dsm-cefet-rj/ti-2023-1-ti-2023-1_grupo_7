import React from "react";
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

    const [id, setId] = useState('');
    const [quantidade, setQtd] = useState('');
    const [varios,setVarios] = useState(false);

    const nextID = useSelector(state=>state.ativos).map((a)=>a.id);
    nextID.sort().reverse();

    const addAtivo_ = (IDativo,quantidade)=>{/*essa função permite adicionar o ativo pelo seu id e quantidade informados na carteira atual assim como na respectiva carteira na lista de carteiras*/
        dispatch(colocaAtivoCarteira({id:carteiraAtual.id,ativo:{id:IDativo,qnt:quantidade}}));
        dispatch(updateCarteiraServer({id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.concat([{id:IDativo,qnt:quantidade}])}));
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
            <button id="novoAtivoButton" onClick={() => setOpenModal(true)}>Novo Ativo</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                {/* children */}
                <>
                {(<div className="lista_ativo">{ativos.map((element,i)=><Ativo key={i} data={{...element,qnt:1}} select={()=>setId(element.id)}/>)}</div>)}
                <form id="formulario2"onSubmit={handleSubmit}>
                    <br/>
            <label>
                Id: 
                <input type="number" className="input_" name="id" min={1} max={8} value={id} onChange={(e) => setId(e.target.value)}   />
            </label>
            <br/>
            <br/>
            <label>
                Quantidade: 
                <input type="number" className="input_" name="valor" min={1} value={quantidade} onChange={(e) => setQtd(e.target.value) }   />
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