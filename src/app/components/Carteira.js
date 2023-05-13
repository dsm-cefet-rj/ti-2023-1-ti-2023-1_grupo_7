import React, { useState } from "react";
import { Inter } from 'next/font/google';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ['latin'] });

function Carteira(props){
    const navegar = useNavigate();
    const dispatch = useDispatch();
    const [edit,setEdit] = useState(props.data.nome==""?true:false);
    const [nome,setNome] = useState(props.data.nome);
    const handleSelection = ()=>{
      dispatch({type:"atualizar_carteiraAtual",payload:props.data});
      navegar("/ativos");
    }
    function submission(){
      dispatch({type:"update_carteira",payload:{id:props.data.id,nome:nome,email:props.data.email,ativos:props.data.ativos}});
      setEdit(false);
    }
    function deleteCarteira(){
      dispatch({type:"delete_carteira",payload:props.data.id});
    }
    const alternate=()=>{setEdit(!edit);setNome(props.data.nome);}
    return(
      <div className="ativo" id='carteira'>
        {edit?
        (<form onSubmit={submission}><input required value={nome} onChange={(e)=>{setNome(e.target.value)}}></input><button type="submit">OK</button></form>):
        (<h2 className={inter.className} onClick={handleSelection}>{props.data.nome}</h2>)}
        <h2 className={inter.className} id='centro'onClick={alternate}>{props.data.nome==""?null:(edit?"Cancelar":"Editar")}</h2>
        <button className={inter.className} id='direita'onClick={deleteCarteira}>Excluir</button>
      </div>
    )
}

export default Carteira;