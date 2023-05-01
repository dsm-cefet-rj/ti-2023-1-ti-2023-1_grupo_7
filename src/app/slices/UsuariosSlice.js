export default function usuariosReducer(usuarios=[] /*state*/, action ){
    switch(action.type){
      case 'add_usuario': /* payload: usuario */
        //cria um novo array com os ids dos usuarios e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
        let proxId = 1 + usuarios.map(u => u.id).reduce((x, y) => Math.max(x,y));
        return usuarios.concat([{...action.payload, id: proxId}]);
      case 'delete_usuario': /* payload: id */
        //filtra o usuario q tem o id igual ao payload
        return usuarios.filter((u) => u.id !== action.payload);
      case 'load_usuario': /* payload: array de usuarios */
        //torna usuarios o array vindo no payload
        return action.payload;
      default:
        return usuarios;
    }
  }