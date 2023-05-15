import React from "react"
import '../styles/ModalCadastro.css';

const BACKGROUND_STYLE = {
    position:'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    backgroundColor:'rgb(0,0,0,0.7)',
    zIndex: '1000',
}

const MODAL_STYLE = {
    position:'fixed',
    top:'0',
    left:'0',
    bottom:'0',
    right:'0',
    paddingLeft:'50px',
    paddingBottom:'100px',
    paddingRight:'50px',
    paddingTop:'50px',
    borderRadius:'10px',
    color:'black'
}

export default function ModalCadastro({isOpen, children, setModalOpen}){
    
    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div id="modalCadastro" style={MODAL_STYLE}>
                   {children}
                   
                    <br/>
                    <button id="fecharCadastro" onClick={setModalOpen}>Fechar</button>
                </div>
            </div>
        )
    }
    
    return null
    
   
}