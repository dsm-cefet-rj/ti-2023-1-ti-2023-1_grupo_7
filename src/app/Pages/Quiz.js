import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Quiz.css';
import Logo from "../components/Logo";

export default function Quiz() {

      return (
      
            <div className="main_">
            <div className="questionario">
                  
                        <Logo/>
                        <h1>Teste de Personalidade</h1><br/>
                        
                        
                      <h3>1. Perfil de investidor conservador</h3><br/>
                      <div className="texto"><p>Quem é mais conservador costuma dar muito mais importância para a segurança. essa pessoa prefere investir em opções que oferecem baixo risco. Isso acaba influenciando seus objetivos, que normalmente estão focados em não perder nada e, assim, preservar seu patrimônio. Diante desse cenário, é comum que o investidor conservador seja alguém com mais de 40 anos, que preza pela segurança do que acumulou durante os anos, ou então é alguém que está começando agora, então tem mais medo de se arriscar por causa da falta de experiência.</p></div>
                      <br/><h3>2. Perfil de investidor moderado</h3><br/>
                      <div className="texto"><p>Seria como um meio termo entre quem é muito conservador e quem é muito arrojado. O investidor moderado é uma pessoa que ainda mantém forte interesse pela segurança, mas está disposta a abrir mão de parte dela às vezes para ter retornos melhores.</p></div>
                      <br/><h3>3. Perfil de investidor arrojado</h3><br/>
                      <div className="texto"><p>Isso quer dizer que está mais aberto para investir na Bolsa de Valores, por exemplo, e está mais maduro para entender a dinâmica do mercado.

Alguém arrojado costuma ser mais experiente e não se abala facilmente por eventuais perdas, porque entende que uma certa exposição ao risco pode ser compensada com melhores ganhos no final.</p></div>


                       
                       
                        
                        
                        <br/>

                  <div className="voltar"><Link to="/cadastro"><button id="botao_voltar">Voltar</button></Link></div>
            
                  
                  
            </div>
            </div>


      )
}