import { configureStore } from '@reduxjs/toolkit';
import ativosReducer from './slices/AtivosSlice'

export const store = configureStore({
    reducer:{
        ativos: ativosReducer
        /*
        usuarios: usuariosReducer
        carteiras: carteirasReducer
        */
    }
})