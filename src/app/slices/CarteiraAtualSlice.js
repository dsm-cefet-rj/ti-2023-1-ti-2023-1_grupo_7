const reducerMap={
    "atualizar_carteiraAtual":(carteiraAtual,novaCarteira)=>{return novaCarteira},
    "coloca_ativo_na_carteira":(carteiraAtual,payload)=>{
        let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.concat([payload.ativo])};
        return novaCarteira},
    "remove_ativo_da_carteira":(carteiraAtual,id)=>{
        let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.filter((a)=>a.id!==id.ativo)};
        return novaCarteira;
    }
}
export default function carteiraAtualReducer(carteiraAtual={} /*state*/, action ){
    const reducer = reducerMap[action.type];
    if(reducer){
        return reducer(carteiraAtual,action.payload);
    }else{
        return carteiraAtual;
    }
}