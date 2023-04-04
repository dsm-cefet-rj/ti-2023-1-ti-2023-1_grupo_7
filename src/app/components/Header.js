import React from "react";
import styled from "styled-components";
import Button from "./form/Button";

const Cabecalho = styled.header`
  background-color: #3072f2;
  margin: 0px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  align-items: center;
`;

const Header = () => {
  return (
    <React.Fragment>
      <Cabecalho>
        <div>logo nome</div>
        ocultar valores
        <Button label="Sair" />
      </Cabecalho>
    </React.Fragment>
  );
};
export default Header;