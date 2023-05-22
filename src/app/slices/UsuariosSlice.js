import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const addUsuarioReducer = (usuarios,novoUsuario)=>{
    return usuarios.concat([{...novoUsuario}]);}

const updateUsuarioReducer = (usuarios,novoUsuario)=>{
    //cria um novo array com os ids dos usuarios e nele busca a posição do id do payload
    let index = usuarios.map(u => u.id).indexOf(novoUsuario.id);
    //copia usuarios
    let usuariosUpdated = usuarios.slice();
    //substitui 1 usuario no index pelo conteúdo do recebido
    usuariosUpdated.splice(index, 1, novoUsuario);
    return usuariosUpdated;}

const deleteUsuarioReducer = (usuarios,id)=>{
    //filtra o usuario q tem o id igual ao payload
    return usuarios.filter((u) => u.id !== id);}

const loadUsuarioReducer = (usuarios,array)=>{return array}

export const fetchUsuarios = createAsyncThunk('usuarios/fetchUsuarios',
    async () => {
        return await (await fetch('http://localhost:5000/usuarios')).json();
});

function fullfillUsuariosReducer(usuariosState, usuariosFetched){
    return usuariosFetched;
}

export const usuariosSlice = createSlice({
    name:'usuarios',
    initialState: [],
    reducers:{
        addUsuario: (state,action) => addUsuarioReducer(state,action.payload),
        updateUsuario: (state,action) => updateUsuarioReducer(state,action.payload),
        deleteUsuario: (state,action) => deleteUsuarioReducer(state,action.payload),
        loadUsuario: (state,action) => loadUsuarioReducer(state,action.payload)
    },
    extraReducers:{
        [fetchUsuarios.fulfilled]: (state,action)=>fullfillUsuariosReducer(state, action.payload),
    }
})

export const {addUsuario,updateUsuario,deleteUsuario,loadUsuario} =  usuariosSlice.actions

export default usuariosSlice.reducer