export default function carteiraAtualReducer(carteiraAtual=[] /*state*/, action ){
    if(action.type==="atualizar_carteiraAtual"){
        return action.payload;
    }else if(action.type==="coloca_ativo_na_carteira"){
        let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.concat([action.payload.ativo])};
        return novaCarteira;
    }else{
        return carteiraAtual;
    }
}