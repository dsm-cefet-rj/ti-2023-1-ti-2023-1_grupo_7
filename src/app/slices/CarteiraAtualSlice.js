export default function carteiraAtualReducer(carteiraAtual=[] /*state*/, action ){
    if(action.type==="atualizar_carteiraAtual"){
        return action.payload;
    }else if(action.type==="coloca_ativo_na_carteira"){
        carteiraAtual.ativos.concat([payload.ativo]);
    }else{
        return carteiraAtual;
    }
}