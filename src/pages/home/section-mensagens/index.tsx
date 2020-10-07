import React, { RefObject } from 'react';

import { StyledSection } from './styles';

interface ISectionMensagens {
  forwardedRef: RefObject<HTMLElement>;
}

const Mensagens: React.FC<ISectionMensagens> = ({ forwardedRef }) => {
  return (
    <StyledSection id="mensagens" ref={forwardedRef}>
      <h1>Mensagens</h1>
      <h2>Em breve...</h2>
    </StyledSection>
  );
};

export default Mensagens;
