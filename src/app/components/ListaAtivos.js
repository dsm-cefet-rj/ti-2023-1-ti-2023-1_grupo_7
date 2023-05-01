
import {React, useEffect} from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ['latin'] })


const ListaAtivos = (props) => {

    const ativos = useSelector(state=>state.ativos);
    const dispatch=useDispatch();
    useEffect(() => {
        fetch('http://localhost:5000/ativos')
          .then(T => T.json())
          .then(data=>{dispatch({type:"load_ativo",payload:data});});},[]);
    const CRUDativos={
        "delete":deleteAtivo
        /*aqui entrará o código de dispatch*/
    }
    function deleteAtivo(id){
        dispatch({type:"delete_ativo",payload:id});
    }
    function __getAtivos(array,tipo){
        return typeof tipo===typeof undefined?
        (<div className="lista">{array.map((element,i)=><Ativo key={i} data={element} deleteAtivo={event=>deleteAtivo(element.id)}/>)}</div>):
        (<div className="lista">{array.filter((element)=>{return element.tipo===tipo}).map((element,i)=><Ativo key={i} data={element} deleteAtivo={event=>deleteAtivo(element.id)}/>)}</div>);
    }

    

    //isso só é mostrado qnd a carteira está vazia
    
    /*
    if(typeof props.data.carteiras[0]===typeof undefined){
        return(
            <h2 className={inter.className} id="placeHolder">
                Não encontramos nenhum ativo na sua carteira, tente adicionar algum
            </h2>)
    }*/
    
    //curso normal para uma carteira com pelo menos algo
    return(
        <>
            <h2 className={inter.className} id='nomeLista'>
                Lista de {typeof props.tipo===typeof undefined?'Ativos':props.tipo}
            </h2>
            <div className="titulo">
                <h3 className={inter.className}>Nome</h3>
                <h3 className={inter.className} id="preco">Valor</h3>
                <h3 className={inter.className} id="quantidade">Quantidade</h3>
            </div>
            {__getAtivos(ativos,props.tipo)}
        </>
    )
}

export default ListaAtivos;