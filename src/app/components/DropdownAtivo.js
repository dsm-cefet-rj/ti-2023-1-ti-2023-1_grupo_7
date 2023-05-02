import React, {useState} from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import '../styles/DropdownAtivo.css';
import Button from './form/Button';

function DropdownAtivo(props) {
    const usuario = useLocation().state;
    const [isOpen,setIsOpen]=useState(false);

    const ativos = useSelector(state=>state.ativos).filter((a)=>{return props.filtro.map(c=>c.id).includes(a.id)});
    const dispatch = useDispatch();

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQtd] = useState('');

    function toggle(){
        setIsOpen(!isOpen);
    }

    function addAtivo(id){
        dispatch({type:"add_ativo", payload:id});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"add_ativo",payload:(ativos[ativos.map((u)=>u.id)])})
    };

    function renderMenu(){
        if(isOpen){
            return(
            <ul>
                <form onSubmit={handleSubmit}>
            <label>
                Nome: 
                <input type="text" className="formulario" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}   />
            </label>
            <br/>
            <label>
                Tipo: 
                <select className='formulario' name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} >
                    <option>Selecione</option>
                    <option>Ação</option>
                    <option>Fundo Imobiliário</option>
                    <option>Renda Fixa</option>
                    <option>Provento</option>
                </select>
            </label>
            <br/>
            <label>
                Valor: 
                <input type="text" className="formulario" name="valor" value={valor} onChange={(e) => setValor(e.target.value) }   />
            </label>
            <br/>
            <label>
                Quantidade: 
                <input type="text" className="formulario" name="valor" value={quantidade} onChange={(e) => setQtd(e.target.value) }   />
            </label>
            <br/>
            <input type="submit" className="salvar" value="Salvar" />
            </form>
            </ul>
            )
        }else{
            return(<div></div>)
        }
    }
    return(
        <div className='dropdownAtivo'>
            <button onClick={toggle} id='menuButton'>Novo Ativo</button>
            {renderMenu()}
        </div>
    );
}

export default DropdownAtivo;