import React from "react";
import { useSelector } from "react-redux";
import '../styles/Distribuicao.css'

export default (props)=>{
    const ativos = useSelector(state=>state.ativos);
    function __getTotal(tipo=""){
        let accumulator = 0;
        if(tipo===""){
            for (let i = 0; i < props.ativos.length; i++) {
                let compra = props.ativos[i];
                let ativoDaCompra = ativos[ativos.map((a)=>a.id).indexOf(compra.id_ativo)];
                accumulator+=ativoDaCompra.valor*compra.qnt;
            }
            return accumulator;
        }
        for (let i = 0; i < props.ativos.length; i++) {
            let compra = props.ativos[i];
            let ativoDaCompra = ativos[ativos.map((a)=>a.id).indexOf(compra.id_ativo)];
            if (ativoDaCompra.tipo===tipo){
                accumulator+=ativoDaCompra.valor*compra.qnt;
            }
        }
        return accumulator;
      }
    return(
    <>
        <br/><h2 style={{fontFamily:"Arial"}}>Relatório de distribuição de investimentos</h2><br/>
        <div className="dist" style={{display:"grid"}}>
            <h3>{(__getTotal("Ação")/__getTotal()).toFixed(4)*100}%</h3> <h3 className="direita">Ações</h3>
            <h3>{(__getTotal("Renda Fixa")/__getTotal()).toFixed(4)*100}%</h3> <h3 className="direita">Renda Fixa</h3>
            <h3>{(__getTotal("Fundo Imobiliário")/__getTotal()).toFixed(4)*100}%</h3> <h3 className="direita">Fundos Imobiliários</h3>
            <h3>{(__getTotal("Provento")/__getTotal()).toFixed(4)*100}%</h3> <h3 className="direita">Proventos</h3>
        </div>
    </>)
}