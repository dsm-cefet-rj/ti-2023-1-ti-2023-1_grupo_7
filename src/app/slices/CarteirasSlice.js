import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialUsuarios = [];

const addCarteiraReducer = (carteiras,novaCarteira)=>{
  //cria um novo array com os ids das carteiras e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
  let proxId = 1 + carteiras.map(c => c.id).reduce((x, y) => Math.max(x,y));
  return carteiras.concat([{...novaCarteira, id: proxId}]);}

const updateCarteiraReducer = (carteiras,novaCarteira)=>{
  //cria um novo array com os ids das carteiras e nele busca a posição do id
  let index = carteiras.map(c => c.id).indexOf(novaCarteira.id);
  //copia carteiras
  let carteirasUpdated = carteiras.slice();
  //substitui 1 carteira no index pelo conteúdo recebido
  carteirasUpdated.splice(index, 1, novaCarteira);
  return carteirasUpdated;}

const deleteCarteiraReducer = (carteiras,id)=>{
  //filtra a carteira q tem o id igual ao recebido
  return carteiras.filter((c) => c.id !== id);}

const loadCarteiraReducer = (carteiras,array)=>{return array}

/*const colocaAtivoCarteiraReducer = (carteiras,payload)=>{
  //cria um novo array com os ids das carteiras e nele busca a posição do id
  let index = carteiras.map(c => c.id).indexOf(payload.id);
  //copia carteiras
  let carteirasUpdated = carteiras.slice();
  let novaCarteira = {id:carteiras[index].id,nome:carteiras[index].nome,email:carteiras[index].email,ativos:carteiras[index].ativos.concat([payload.ativo])};
  //substitui 1 carteira no index pelo conteúdo recebido
  carteirasUpdated.splice(index, 1, novaCarteira);
  return carteirasUpdated;}

const removeAtivoCarteiraReducer = (carteiras,id)=>{
  //cria um novo array com os ids das carteiras e nele busca a posição do id
  let index = carteiras.map(c => c.id).indexOf(id.carteira);
  //copia carteiras
  let carteirasUpdated = carteiras.slice();
  let novaCarteira = {id:carteiras[index].id,nome:carteiras[index].nome,email:carteiras[index].email,ativos:carteiras[index].ativos.filter((a)=>a.id!==id.ativo)};
  //substitui 1 carteira no index pelo conteúdo recebido
  carteirasUpdated.splice(index, 1, novaCarteira);
  return carteirasUpdated;
}*/

export const deleteCarteiraServer = createAsyncThunk('carteiras/deleteCarteiraServer', async (idCarteira) => {
  let response = await fetch('http://localhost:5000/carteiras/' + idCarteira, {method: 'DELETE'});
  if(response.ok){
      return idCarteira;
  }else{
      throw new Error("Erro ao excluir o carteira");
  }
});

export const addCarteiraServer = createAsyncThunk('carteiras/addCarteiraServer', async (carteira) => {
  let response = await fetch('http://localhost:5000/carteiras' , 
                              {
                                  method: 'POST', 
                                  headers: {
                                      'Content-Type': 'application/json;charset=utf-8'
                                  },
                                  body: JSON.stringify(carteira)
                              });
  if(response.ok){
      return carteira;
  }else{
      throw new Error("Erro ao incluir o carteira");
  }
});

export const updateCarteiraServer = createAsyncThunk('carteiras/updateCarteiraServer', async (carteira) => {
  let response = await fetch('http://localhost:5000/carteiras/' + carteira.id , 
                              {
                                  method: 'PUT', 
                                  headers: {
                                      'Content-Type': 'application/json;charset=utf-8'
                                  },
                                  body: JSON.stringify(carteira)
                              });
  if(response.ok){
      return carteira;
  }else{
      throw new Error("Erro ao atualizar o carteira");
  }
});

export const fetchCarteiras = createAsyncThunk('carteiras/fetchCarteiras',
async () => {
    return await (await fetch('http://localhost:5000/carteiras')).json();
});

function fullfillCarteirasReducer(carteirasState, carteirasFetched){
  return carteirasFetched;
}

export const carteirasSlice = createSlice({
  name:'carteiras',
  initialState: initialUsuarios,
  reducers:{
      addCarteira: (state,action) => addCarteiraReducer(state,action.payload),
      updateCarteira: (state,action) => updateCarteiraReducer(state,action.payload),
      deleteCarteira: (state,action) => deleteCarteiraReducer(state,action.payload),
      loadCarteira: (state,action) => loadCarteiraReducer(state,action.payload)/*,
      colocaAtivoCarteira: (state,action) => colocaAtivoCarteiraReducer(state,action.payload),
      removeAtivoCarteira:(state,action) => removeAtivoCarteiraReducer(state,action.payload)*/
  },
  extraReducers:{
    [fetchCarteiras.fulfilled]: (state,action)=>fullfillCarteirasReducer(state, action.payload),
    [deleteCarteiraServer.fulfilled]: (state,action)=>deleteCarteiraReducer(state, action.payload),
    [addCarteiraServer.fulfilled]: (state,action)=>addCarteiraReducer(state, action.payload),
    [updateCarteiraServer.fulfilled]: (state,action)=>updateCarteiraReducer(state, action.payload),
  }
})

export const {addCarteira,updateCarteira, deleteCarteira, loadCarteira/*,colocaAtivoCarteira,removeAtivoCarteira*/} =  carteirasSlice.actions

export default carteirasSlice.reducer


/*const reducerMap={
  'add_carteira':(carteiras,novaCarteira)=>{
      //cria um novo array com os ids das carteiras e usa reduce para ao invés de acumular sempre manter o maior valor e então soma 1
      let proxId = 1 + carteiras.map(c => c.id).reduce((x, y) => Math.max(x,y));
      return carteiras.concat([{...novaCarteira, id: proxId}]);},
  'update_carteira':(carteiras,novaCarteira)=>{
      //cria um novo array com os ids das carteiras e nele busca a posição do id
      let index = carteiras.map(c => c.id).indexOf(novaCarteira.id);
      //copia carteiras
      let carteirasUpdated = carteiras.slice();
      //substitui 1 carteira no index pelo conteúdo recebido
      carteirasUpdated.splice(index, 1, novaCarteira);
      return carteirasUpdated;},
  'delete_carteira':(carteiras,id)=>{
      //filtra a carteira q tem o id igual ao recebido
      return carteiras.filter((c) => c.id !== id);},
  'load_carteira':(carteiras,array)=>{return array},
  'coloca_ativo_na_carteira':(carteiras,payload)=>{
    //cria um novo array com os ids das carteiras e nele busca a posição do id
    let index = carteiras.map(c => c.id).indexOf(payload.id);
    //copia carteiras
    let carteirasUpdated = carteiras.slice();
    let novaCarteira = {id:carteiras[index].id,nome:carteiras[index].nome,email:carteiras[index].email,ativos:carteiras[index].ativos.concat([payload.ativo])};
    //substitui 1 carteira no index pelo conteúdo recebido
    carteirasUpdated.splice(index, 1, novaCarteira);
    return carteirasUpdated;
  },
  'remove_ativo_da_carteira':(carteiras,id)=>{
    //cria um novo array com os ids das carteiras e nele busca a posição do id
    let index = carteiras.map(c => c.id).indexOf(id.carteira);
    //copia carteiras
    let carteirasUpdated = carteiras.slice();
    let novaCarteira = {id:carteiras[index].id,nome:carteiras[index].nome,email:carteiras[index].email,ativos:carteiras[index].ativos.filter((a)=>a.id!==id.ativo)};
    //substitui 1 carteira no index pelo conteúdo recebido
    carteirasUpdated.splice(index, 1, novaCarteira);
    return carteirasUpdated;
  }
}
export default function carteirasReducer(carteiras=[], action ){
    const reducer = reducerMap[action.type];
    if(reducer){
        return reducer(carteiras,action.payload);
    }else{
        return carteiras;
    }
}*/