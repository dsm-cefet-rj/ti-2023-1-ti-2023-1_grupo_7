import React from "react";
import '../styles/Modal.css';

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
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    padding:'100px',
    borderRadius:'10px',
    color:'black'
}

export default function Modal({isOpen, children, setModalOpen}){
    
    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div id="modal" style={MODAL_STYLE}>
                    {children}
                    <br/>
                    <button id="fechar" onClick={setModalOpen}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return null
    
   
}