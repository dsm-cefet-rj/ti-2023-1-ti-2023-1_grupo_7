import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const addAtivoReducer = (ativos,novoAtivo)=>{
    //cria um novo array com os ids dos ativos e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
    let proxId = 1 + ativos.map(a => a.id).reduce((x, y) => Math.max(x,y));
    return ativos.concat([{...novoAtivo, id: proxId}]);}

const updateAtivoReducer = (ativos,novoAtivo)=>{
    //cria um novo array com os ids dos ativos e nele busca a posição do id do payload
    let index = ativos.map(a => a.id).indexOf(novoAtivo.id);
    //copia ativos
    let ativosUpdated = ativos.slice();
    //substitui 1 ativo no index pelo conteúdo do payload
    ativosUpdated.splice(index, 1, novoAtivo);
    return ativosUpdated;}

const deleteAtivoReducer = (ativos,id)=>{
    //filtra o ativo q tem o id igual ao payload
    return ativos.filter((a) => a.id !== id);}

export const fetchAtivos = createAsyncThunk('ativos/fetchAtivos',
async () => {
    return await (await fetch('http://localhost:5000/ativos')).json();
});

function fullfillAtivosReducer(carteirasState, carteirasFetched){
    return carteirasFetched;
}

export const ativosSlice = createSlice({
    name:'ativos',
    initialState: [],
    reducers:{
        addAtivo: (state,action) => addAtivoReducer(state,action.payload),
        updateAtivo: (state,action) => updateAtivoReducer(state,action.payload),
        deleteAtivo: (state,action) => deleteAtivoReducer(state,action.payload)
    },
    extraReducers:{
      [fetchAtivos.fulfilled]: (state,action)=>fullfillAtivosReducer(state, action.payload)
    }
})

export const {addAtivo,updateAtivo,deleteAtivo} =  ativosSlice.actions

export default ativosSlice.reducer



/*const reducerMap={
    'add_ativo':(ativos,novoAtivo)=>{
        //cria um novo array com os ids dos ativos e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
        let proxId = 1 + ativos.map(a => a.id).reduce((x, y) => Math.max(x,y));
        return ativos.concat([{...novoAtivo, id: proxId}]);},
    'update_ativo':(ativos,novoAtivo)=>{
        //cria um novo array com os ids dos ativos e nele busca a posição do id do payload
        let index = ativos.map(a => a.id).indexOf(novoAtivo.id);
        //copia ativos
        let ativosUpdated = ativos.slice();
        //substitui 1 ativo no index pelo conteúdo do payload
        ativosUpdated.splice(index, 1, novoAtivo);
        return ativosUpdated;},
    'delete_ativo':(ativos,id)=>{
        //filtra o ativo q tem o id igual ao payload
        return ativos.filter((a) => a.id !== id);},
    'load_ativo':(ativos,payload)=>{return payload.array;},//.filter((a)=>{return payload.carteiraAtual.ativos.map(c=>c.id).includes(a.id)})},
    'coloca_ativo_na_carteira':(ativos,payload)=>{return ativos}
}
export default function ativosReducer(ativos=[] state, action ){
    const reducer = reducerMap[action.type];
    if(reducer){
        return reducer(ativos,action.payload);
    }else{
        return ativos;
    }
}*/