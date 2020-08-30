import React from 'react';

import Header from '../../components/header';
import { StyledMain } from './styles';

const PageNotFound: React.FC = () => (
  <>
    <Header />
    <StyledMain>
      <h1>Ooooooppssss...</h1>
      <h2>Esta página que você acessou não existe...</h2>
    </StyledMain>
  </>
);

export default PageNotFound;
