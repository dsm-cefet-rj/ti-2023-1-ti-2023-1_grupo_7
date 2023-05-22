import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchCarteiras, updateCarteiraServer } from "./CarteirasSlice";

const updateCarteiraAtualReducer = (carteiraAtual,novaCarteira)=>{return novaCarteira}

const colocaAtivoCarteiraReducer = (carteiraAtual,payload)=>{
    let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.concat([payload.ativo])};
    return novaCarteira}

const removeAtivoCarteiraReducer = (carteiraAtual,id)=>{
    let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.filter((a)=>a.id!==id.ativo)};
    return novaCarteira;
}

export const fetchCarteiraAtual = createAsyncThunk('carteiras/fetchCarteiraAtual',
    async () => {
        return await (await fetch('http://localhost:5000/carteiras')).json();
});

function fullfillCarteiraAtualReducer(carteiraAtualState, carteiraAtualFetched){
    return carteiraAtualFetched;
}

export const carteiraAtualSlice = createSlice({
    name:'carteiraAtual',
    initialState: [],
    reducers:{
        updateCarteiraAtual: (state,action) => updateCarteiraAtualReducer(state,action.payload),
        colocaAtivoCarteira: (state,action) => colocaAtivoCarteiraReducer(state,action.payload),
        removeAtivoCarteira: (state,action) => removeAtivoCarteiraReducer(state,action.payload)
    },
    extraReducers:{
        [fetchCarteiraAtual] : (state,action) => fullfillCarteiraAtualReducer(state, action.payload),
    },
    
})

export const {updateCarteiraAtual,colocaAtivoCarteira,removeAtivoCarteira} =  carteiraAtualSlice.actions

export default carteiraAtualSlice.reducer

/*const reducerMap={
    "atualizar_carteiraAtual":(carteiraAtual,novaCarteira)=>{return novaCarteira},
    "coloca_ativo_na_carteira":(carteiraAtual,payload)=>{
        let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.concat([payload.ativo])};
        return novaCarteira},
    "remove_ativo_da_carteira":(carteiraAtual,id)=>{
        let novaCarteira = {id:carteiraAtual.id,nome:carteiraAtual.nome,email:carteiraAtual.email,ativos:carteiraAtual.ativos.filter((a)=>a.id!==id.ativo)};
        return novaCarteira;
    }
}
export default function carteiraAtualReducer(carteiraAtual={}, action ){
    const reducer = reducerMap[action.type];
    if(reducer){
        return reducer(carteiraAtual,action.payload);
    }else{
        return carteiraAtual;
    }
}*/