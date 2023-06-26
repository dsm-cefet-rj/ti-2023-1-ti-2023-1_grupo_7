import { React } from "react";
import '../styles/ListaAtivos.css';
import { Inter } from 'next/font/google';
import Ativo from "./Ativo";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ['latin'] })


const ListaAtivos = (props) => {

    const carteiraAtual = useSelector(state=>state.carteiraAtual);
    const ativos = useSelector(state=>state.ativos).filter((a)=>{return carteiraAtual.ativos.map(c=>c.id_ativo).includes(a.id)});
    const nextID = useSelector(state=>state.ativos).map((a)=>a.id);
    nextID.sort().reverse();
    
    
    function __getAtivos(){
       return typeof props.tipo===typeof undefined?//data={id,tipo,nome,valor,qnt}
       (<div className="lista_ativo">{carteiraAtual.ativos.map((compra,i)=><Ativo key={i} data={{...ativos.filter((a)=>a.id===compra.id_ativo)[0],qnt:compra.qnt,id_compra:compra.id}}/>)}</div>):
       (<div className="lista_ativo">{carteiraAtual.ativos.map((compra,i)=>ativos[ativos.map((a)=>a.id).indexOf(compra.id_ativo)].tipo===props.tipo?<Ativo key={i} data={{...ativos.filter((a)=>a.id===compra.id_ativo)[0],qnt:compra.qnt,id_compra:compra.id}}/>:null)}</div>)
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
                <h3 className={inter.className} id="esquerda">Valor</h3>
                <h3 className={inter.className} id="centro_2">Quantidade</h3>
                <h3 className={inter.className} id="centro">Total</h3>
            </div>
            {__getAtivos()}
            
        </>
    )
}

export default ListaAtivos;