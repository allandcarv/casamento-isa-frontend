import React, { RefObject } from 'react';

import { StyledSection } from './styles';

interface ISectionBanner {
  forwardedRef: RefObject<HTMLElement>;
}

const Banner: React.FC<ISectionBanner> = ({ forwardedRef }) => {
  return (
    <StyledSection id="inicio" ref={forwardedRef}>
      <i />
      <h1>
        Leonardo
        <span>&</span>
        Isabelle
      </h1>
      <p>23 de janeiro de 2021</p>
    </StyledSection>
  );
};

export default Banner;
