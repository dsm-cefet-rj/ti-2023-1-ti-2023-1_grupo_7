import React from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  return (
    <form>
      <Input id="email" label="Email" />
      <Input id="senha" label="Senha" type="password" />
      <Button label="Entrar" />
    </form>
  );
};

export default Login;