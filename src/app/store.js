import { configureStore } from '@reduxjs/toolkit';
import ativosReducer from './slices/AtivosSlice'
import usuariosReducer from './slices/UsuariosSlice';
import carteirasReducer from './slices/CarteirasSlice';

export const store = configureStore({
    reducer:{
        ativos: ativosReducer,
        usuarios: usuariosReducer,
        carteiras: carteirasReducer
    }
})