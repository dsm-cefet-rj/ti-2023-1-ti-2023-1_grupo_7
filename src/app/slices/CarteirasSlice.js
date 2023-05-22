import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchCarteiras = createAsyncThunk('ativos/fetchAtivos',
async () => {
    return await (await fetch('http://localhost:5000/carteira')).json();
});

export const carteirasSlice = createSlice({
  name:'carteiras',
  initialState: [],
  reducers:{
      addCarteira: (state,action) => addCarteiraReducer(state,action.payload),
      updateCarteira: (state,action) => updateCarteiraReducer(state,action.payload),
      deleteCarteira: (state,action) => deleteCarteiraReducer(state,action.payload),
      loadCarteira: (state,action) => loadCarteiraReducer(state,action.payload)/*,
      colocaAtivoCarteira: (state,action) => colocaAtivoCarteiraReducer(state,action.payload),
      removeAtivoCarteira:(state,action) => removeAtivoCarteiraReducer(state,action.payload)*/
  },
  extraReducers:{
    [fetchCarteiras.fulfilled]: (state,action)=>{state = action.payload}
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