import React, { RefObject } from 'react';

import { StyledSection } from './styles';

interface ISectionMensagens {
  forwardedRef: RefObject<HTMLElement>;
}

const Mensagens: React.FC<ISectionMensagens> = ({ forwardedRef }) => {
  return (
    <StyledSection id="mensagens" ref={forwardedRef}>
      <h1>Mensagens</h1>
      <div className="container">
        <span>Em breve...</span>
      </div>
    </StyledSection>
  );
};

export default Mensagens;
