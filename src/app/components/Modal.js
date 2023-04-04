import React from "react";

const Modal = ({ Modal, setModal }) => {
  return (
    <div>
      Esse pe um modal. <button onClick={() => setModal(false)}>Fechar</button>
    </div>
  );
};

export default Modal;
