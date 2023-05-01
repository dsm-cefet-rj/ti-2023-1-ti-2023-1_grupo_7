export default function ativosReducer(ativos=[] /*state*/, action ){
    switch(action.type){
      case 'add_ativo': /* payload: ativo */
        //cria um novo array com os ids dos ativos e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
        let proxId = 1 + ativos.map(a => a.id).reduce((x, y) => Math.max(x,y));
        return ativos.concat([{...action.payload, id: proxId}]);
      case 'update_ativo': /* payload: ativo */
        //cria um novo array com os ids dos ativos e nele busca a posição do id do payload
        let index = ativos.map(a => a.id).indexOf(action.payload.id);
        //copia ativos
        let ativosUpdated = ativos.slice();
        //substitui 1 ativo no index pelo conteúdo do payload
        ativosUpdated.splice(index, 1, action.payload);
        return ativosUpdated;
      case 'delete_ativo': /* payload: id */
        //filtra o ativo q tem o id igual ao payload
        return ativos.filter((a) => a.id !== action.payload);
      case 'load_ativo': /* payload: array de ativos */
        //torna ativos o array vindo no payload
        return action.payload;
      default:
        return ativos;
    }
  }