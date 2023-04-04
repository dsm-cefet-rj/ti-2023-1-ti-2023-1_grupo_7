import React from "react";
import { Route, Routes , BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Acoes from "./Pages/Acoes";
import Proventos from "./Pages/Proventos";
import RendaFixa from "./Pages/RendaFixa";
import Fi from "./Pages/Fi";

const Rotas = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route component = { Home }  path="/" exact />
           <Route component = { Acoes }  path="/acoes" />
           <Route component = { Fi }  path="/fi" />
           <Route component = { RendaFixa }  path="/rendafixa" />
           <Route component = { Proventos }  path="/proventos" />
        </Routes>
       </BrowserRouter>
   )
}

export default Rotas;