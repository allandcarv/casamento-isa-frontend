import React, { RefObject } from 'react';

import { StyledSection } from './styles';

interface ISectionLocal {
  forwardedRef: RefObject<HTMLElement>;
}

const Local: React.FC<ISectionLocal> = ({ forwardedRef }) => {
  return (
    <StyledSection id="local" ref={forwardedRef}>
      <h1>Localização</h1>
      <h2>Em breve...</h2>
    </StyledSection>
  );
};

export default Local;
