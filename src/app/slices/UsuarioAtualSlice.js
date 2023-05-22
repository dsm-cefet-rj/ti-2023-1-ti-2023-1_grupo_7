import { createSlice } from "@reduxjs/toolkit";

const updateUsuarioAtualReducer = (usuarioAtual,novoUsuario) => {return novoUsuario}

export const usuarioAtualSlice = createSlice({
    name:'usuarioAtual',
    initialState: {},
    reducers:{
        updateUsuarioAtual: (state,action) => updateUsuarioAtualReducer(state,action.payload)
    }
})

export const {updateUsuarioAtual} =  usuarioAtualSlice.actions

export default usuarioAtualSlice.reducer

/*
export default function UsuarioAtualReducer(usuarioAtual={}, action ){
    if(action.type==="atualizar_usuarioAtual"){
        return action.payload;
    }else{
        return usuarioAtual;
    }
}*/