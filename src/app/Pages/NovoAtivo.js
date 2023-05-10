import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
//import '../styles/DropdownAtivo.css';
import '../styles/NovoAtivo.css';
import Modal from "../components/Modal";

export default function NovoAtivo(props){

    const usuario = useLocation().state;

    //const ativos = useSelector(state=>state.ativos).filter((a)=>{return props.filtro.map(c=>c.id).includes(a.id)});
    const dispatch = useDispatch();
    const carteiraAtual = useSelector(state=>state.carteiraAtual);

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [id, setId] = useState('');
    const [quantidade, setQtd] = useState('');

    const nextID = useSelector(state=>state.ativos).map((a)=>a.id);
    nextID.sort().reverse();

    function addAtivo(){
        carteiraAtual.ativos.concat([{id:nextID[0]+1,qnt:quantidade}]);
        dispatch({type:"add_ativo", payload:{tipo:tipo,nome:nome,valor:valor}});
    }

    const addAtivo_ = (IDativo,quantidade)=>{/*essa função permite adicionar o ativo pelo seu id e quantidade informados na carteira atual assim como na respectiva carteira na lista de carteiras*/
    dispatch({type:"coloca_ativo_na_carteira",payload:{id:carteiraAtual.id,ativo:{id:IDativo,qnt:quantidade}}})
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        //addAtivo();
        setId('');
        setQtd('');
        //setTipo('');
        //setValor('');
        addAtivo_(+id, +quantidade);
    }

    const [openModal, setOpenModal] = useState(false);



    return(
        <div className='dropdownAtivo'>
            <button onClick={() => setOpenModal(true)}>Novo Ativo</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                {/* children */}
                <>
                <form id="formulario2"onSubmit={handleSubmit}>
            <label>
                Id: 
                <input type="number" className="input_" name="id" min={1} max={8} value={id} onChange={(e) => setId(e.target.value)}   />
            </label>
            <br/>
            {/*<br/>
            <label>
                Tipo: 
                <select  name="tipo" className="input_" value={tipo} onChange={(e) => setTipo(e.target.value)} >
                    <option>Selecione</option>
                    <option>Ação</option>
                    <option>Fundo Imobiliário</option>
                    <option>Renda Fixa</option>
                    <option>Provento</option>
                </select>
            </label>
            <br/>
    <br/>
            <label>
                Valor: 
                <input type="text" className="input_" name="valor" value={valor} onChange={(e) => setValor(e.target.value) }   />
            </label>
            <br/>
    <br/>*/}
            <br/>
            <label>
                Quantidade: 
                <input type="number" className="input_" name="valor" min={1} value={quantidade} onChange={(e) => setQtd(e.target.value) }   />
            </label>
            <br/>
<<<<<<< Updated upstream
            <br/>
            <input type="submit" className="salvar" value="Salvar"/>
            </form>
            </>
            </Modal>
=======
            <Link to="/ativo"><input type="submit" className="salvar" value="Salvar" /></Link>
            </form>
        </ul>
        )
    }


    return(
        <div className='dropdownAtivo'>
            <Link to="/ativo/novoativo"><button onClick={renderForm} id='menuButton'>Novo Ativo</button></Link>
            
>>>>>>> Stashed changes
        </div>
    )
}