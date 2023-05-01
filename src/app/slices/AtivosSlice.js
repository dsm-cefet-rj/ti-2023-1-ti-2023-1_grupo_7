const reducerMap={
    'add_ativo':(ativos,novoAtivo)=>{
        //cria um novo array com os ids dos ativos e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
        let proxId = 1 + ativos.map(a => a.id).reduce((x, y) => Math.max(x,y));
        return ativos.concat([{...novoAtivo, id: proxId}]);},
    'update_ativo':(ativos,novoAtivo)=>{
        //cria um novo array com os ids dos ativos e nele busca a posição do id do payload
        let index = ativos.map(a => a.id).indexOf(novoAtivo.id);
        //copia ativos
        let ativosUpdated = ativos.slice();
        //substitui 1 ativo no index pelo conteúdo do payload
        ativosUpdated.splice(index, 1, novoAtivo);
        return ativosUpdated;},
    'delete_ativo':(ativos,id)=>{
        //filtra o ativo q tem o id igual ao payload
        return ativos.filter((a) => a.id !== id);},
    'load_ativo':(ativos,array)=>{return array}
}
export default function ativosReducer(ativos=[] /*state*/, action ){
    const reducer = reducerMap[action.type];
    if(reducer){
        return reducer(ativos,action.payload);
    }else{
        return ativos;
    }
}