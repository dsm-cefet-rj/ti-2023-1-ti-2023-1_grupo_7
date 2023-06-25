import { configureStore } from '@reduxjs/toolkit';
import ativosReducer from './slices/AtivosSlice'
import usuariosReducer from './slices/UsuariosSlice';
import carteirasReducer from './slices/CarteirasSlice';
import carteiraAtualReducer from './slices/CarteiraAtualSlice';
import usuarioAtualReducer from './slices/UsuarioAtualSlice';


export const store = configureStore({
    reducer:{
        ativos: ativosReducer,
        usuarios: usuariosReducer,
        carteiras: carteirasReducer,
        usuarioAtual: usuarioAtualReducer,
        carteiraAtual: carteiraAtualReducer
    }
})