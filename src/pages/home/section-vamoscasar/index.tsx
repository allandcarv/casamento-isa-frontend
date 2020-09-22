import React, { RefObject } from 'react';

import { StyledSection } from './styles';

interface ISectionVamosCasar {
  forwardedRef: RefObject<HTMLElement>;
}

const VamosCasar: React.FC<ISectionVamosCasar> = ({ forwardedRef }) => {
  return (
    <StyledSection id="vamos-casar" ref={forwardedRef}>
      <p>Sim, é verdade! A gente vai se casar!!!</p>

      <p>
        Estamos muito felizes, estamos nas nuvens! Por isso queremos
        compartilhar com você esse amor e a expectativa para o grande dia; nós
        estamos preparando um casamento que fará história e no qual você vai se
        divertir muito, temos certeza.
      </p>

      <p>
        Enquanto o grande dia não chega, criamos este site com secões que te
        darão todas as informações necessárias a respeito do evento, para
        facilitar e melhorar a experiência de cada um. É também aqui que vamos
        compartilhar com você um pouco sobre a nossa história de amor, que logo
        logo comecará uma nova e maravilhosa etapa e da qual você já faz parte.
      </p>

      <p>
        Cada secão tem a sua importância e foi pensada com muito carinho.
        Pedimos principalmente que você dê uma atenção especial a aba PRESENÇA
        pois lá é onde você informará se vai ou não ao casamento. Por favor,
        confirme o mais rápido possível. Isso nos ajudará bastante na
        organização de tudo.
      </p>

      <p>
        A princípio, é isso! Desejamos que você aproveite bastante este espaço,
        acompanhe as novidades e se prepare para a festa!
      </p>

      <p>Nos encontramos em breve!</p>

      <p>Com amor,</p>
      <p>Léo e Isa</p>
    </StyledSection>
  );
};

export default VamosCasar;
