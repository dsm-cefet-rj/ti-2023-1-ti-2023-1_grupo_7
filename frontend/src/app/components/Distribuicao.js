import React from "react";
import { useSelector } from "react-redux";

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
        console.log(props.ativos);
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
            <br/>
            <h2>Relatorio de distribuição de investimentos</h2><br/>
            <h5>{(__getTotal("Ação")/__getTotal()).toFixed(4)*100}% Ações</h5>
            <h5>{(__getTotal("Renda Fixa")/__getTotal()).toFixed(4)*100}% Renda Fixa</h5>
            <h5>{(__getTotal("Fundo Imobiliário")/__getTotal()).toFixed(4)*100}% Fundos Imobiliários</h5>
            <h5>{(__getTotal("Provento")/__getTotal()).toFixed(4)*100}% Proventos</h5>
        </>
    )
}