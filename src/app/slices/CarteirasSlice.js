const reducerMap={
  'add_carteira':(carteiras,novaCarteira)=>{
      //cria um novo array com os ids das carteiras e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
      let proxId = 1 + carteiras.map(c => c.id).reduce((x, y) => Math.max(x,y));
      return carteiras.concat([{...novaCarteira, id: proxId}]);},
  'update_carteira':(carteiras,novaCarteira)=>{
      //cria um novo array com os ids das carteiras e nele busca a posição do id
      let index = carteiras.map(c => c.id).indexOf(novaCarteira.id);
      //copia carteiras
      let carteirasUpdated = carteiras.slice();
      //substitui 1 carteira no index pelo conteúdo recebido
      carteirasUpdated.splice(index, 1, novaCarteira);
      return carteirasUpdated;},
  'delete_carteira':(carteiras,id)=>{
      //filtra a carteira q tem o id igual ao recebido
      return carteiras.filter((c) => c.id !== id);},
  'load_carteira':(carteiras,array)=>{return array},
  'coloca_ativo_na_carteira':(carteiras,payload)=>{
    //cria um novo array com os ids das carteiras e nele busca a posição do id
    let index = carteiras.map(c => c.id).indexOf(payload.id);
    //copia carteiras
    let carteirasUpdated = carteiras.slice();
    let novaCarteira = carteiras[index];
    novaCarteira.ativos.concat([payload.ativo]);
    //substitui 1 carteira no index pelo conteúdo recebido
    carteirasUpdated.splice(index, 1, novaCarteira);
  }
}
export default function carteirasReducer(carteiras=[] /*state*/, action ){
    const reducer = reducerMap[action.type];
    if(reducer){
        return reducer(carteiras,action.payload);
    }else{
        return carteiras;
    }
}