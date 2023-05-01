export default function carteirasReducer(carteiras=[] /*state*/, action ){
    switch(action.type){
      case 'add_carteira': /* payload: carteira */
        //cria um novo array com os ids das carteiras e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
        let proxId = 1 + carteiras.map(c => c.id).reduce((x, y) => Math.max(x,y));
        return carteiras.concat([{...action.payload, id: proxId}]);
    case 'update_carteira': /* payload: carteira */
        //cria um novo array com os ids das carteiras e nele busca a posição do id do payload
        let index = carteiras.map(c => c.id).indexOf(action.payload.id);
        //copia carteiras
        let carteirasUpdated = carteiras.slice();
        //substitui 1 ativo no index pelo conteúdo do payload
        carteirasUpdated.splice(index, 1, action.payload);
        return carteirasUpdated;
      case 'delete_carteira': /* payload: id */
        //filtra a carteira q tem o id igual ao payload
        return carteiras.filter((c) => c.id !== action.payload);
      case 'load_carteira': /* payload: array de carteiras */
        //torna carteiras o array vindo no payload
        return action.payload;
      default:
        return carteiras;
    }
  }