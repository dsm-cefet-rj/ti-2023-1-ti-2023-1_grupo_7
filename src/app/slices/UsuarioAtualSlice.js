import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const updateUsuarioAtualReducer = (usuarioAtual,novoUsuario) => {return novoUsuario}

export const fetchUsuarioAtual = createAsyncThunk('usuarios/fetchUsuarios',
    async () => {
        return await (await fetch('http://localhost:5000/usuarios')).json();
});

function fullfillUsuarioAtualReducer(usuarioAtualState, usuarioAtualfetched){
    return usuarioAtualfetched;
}

export const usuarioAtualSlice = createSlice({
    name:'usuarioAtual',
    initialState: {},
    reducers:{
        updateUsuarioAtual: (state,action) => updateUsuarioAtualReducer(state,action.payload)
    },
    extraReducers: {
        [fetchUsuarioAtual.fulfilled]: (state, action) => fullfillUsuarioAtualReducer(state, action.payload),
    },
})

export const {updateUsuarioAtual} =  usuarioAtualSlice.actions

export default usuarioAtualSlice.reducer