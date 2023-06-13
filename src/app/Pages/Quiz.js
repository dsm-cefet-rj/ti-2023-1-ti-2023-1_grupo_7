import React from "react";
import { useState } from "react";
import '../styles/Quiz.css';
import ModalCadastro from "../components/ModalCadastro";
import Image from "next/image";

export default function Quiz() {

      const [openModal, setOpenModal] = useState(false);

      return (
      
           <>
            <Image className="sobre_botao" src="/info.svg" width={30} height={30} onClick={() => setOpenModal(true)}/>

            <ModalCadastro isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            <div className="questionario">
                  
                        <h1>Perfil de Investimento</h1><br/>
                        
                        
                      <h3>1. Perfil de investidor conservador</h3><br/>
                      <div className="texto"><p>Quem é mais conservador costuma dar muito mais importância para a segurança. essa pessoa prefere investir em opções que oferecem baixo risco. Isso acaba influenciando seus objetivos, que normalmente estão focados em não perder nada e, assim, preservar seu patrimônio.<br/><br/> Diante desse cenário, é comum que o investidor conservador seja alguém com mais de 40 anos, que preza pela segurança do que acumulou durante os anos, ou então é alguém que está começando agora, então tem mais medo de se arriscar por causa da falta de experiência.</p></div>
                      <br/><h3>2. Perfil de investidor moderado</h3><br/>
                      <div className="texto"><p>Seria como um meio termo entre quem é muito conservador e quem é muito arrojado. O investidor moderado é uma pessoa que ainda mantém forte interesse pela segurança, mas está disposta a abrir mão de parte dela às vezes para ter retornos melhores. <br/><br/>Isso significa que alguém moderado pode, eventualmente, investir em algo mais arriscado do que os investimentos conservadores. Em muitos casos, um investidor moderado já tem um pouco mais de conhecimento sobre o mercado e está no processo para fazer seu patrimônio crescer.</p></div>
                      <br/><h3>3. Perfil de investidor arrojado</h3><br/>
                      <div className="texto"><p>Isso quer dizer que está mais aberto para investir na Bolsa de Valores, por exemplo, e está mais maduro para entender a dinâmica do mercado.

Alguém arrojado costuma ser mais experiente e não se abala facilmente por eventuais perdas, porque entende que uma certa exposição ao risco pode ser compensada com melhores ganhos no final.<br/><br/>Essas perdas não significam que quem se enquadra nesse perfil investe sem muita estratégia. Pelo contrário, essa pessoa precisa entender bem do mercado e ter visão estratégica para aproveitar as pequenas oscilações do dia a dia para realizar lucros.

Além disso, vale destacar que o arrojado também pode ter uma parcela menor do seu capital investido em ativos um pouco mais conservadores, como uma forma de manter uma reserva financeira em caso de emergência, por exemplo.</p></div>
                        
            <br/><br/><p><b>Fonte: </b><a href="https://l1nq.com/F6A84">https://l1nq.com/F6A84</a></p> 
                  
            </div>
            </ModalCadastro>
            
            </>

      )
}