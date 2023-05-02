export default function carteiraAtualReducer(carteiraAtual=[] /*state*/, action ){
    if(action.type==="atualizar_carteiraAtual"){
        return action.payload;
    }else{
        return carteiraAtual;
    }
}