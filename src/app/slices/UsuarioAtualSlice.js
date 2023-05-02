export default function UsuarioAtualReducer(usuarioAtual={} /*state*/, action ){
    if(action.type==="atualizar_usuarioAtual"){
        return action.payload;
    }else{
        return usuarioAtual;
    }
}