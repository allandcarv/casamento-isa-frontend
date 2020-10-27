import React, { RefObject } from 'react';

import { StyledSection } from './styles';

interface ISectionAlbuns {
  forwardedRef: RefObject<HTMLElement>;
}

const Albuns: React.FC<ISectionAlbuns> = ({ forwardedRef }) => {
  return (
    <StyledSection id="album" ref={forwardedRef}>
      <h1>Álbuns</h1>
      <div className="container">
        <span>Em breve...</span>
      </div>
    </StyledSection>
  );
};

export default Albuns;
