import React from 'react';

import { Container, Menu, StyledHeader } from './styles';

const Header: React.FC = () => (
  <StyledHeader>
    <Container>
      <Menu>
        <li>
          <a href="inicio">Início</a>
        </li>
        <li>
          <a href="sobre-nos">Os noivos</a>
        </li>
        <li>
          <a href="albuns">Álbuns</a>
        </li>
        <li>
          <a href="instagram">#NossaHashtag</a>
        </li>
        <li>
          <a href="recados-aos-noivos">Post-It</a>
        </li>
        <li>
          <a href="padrinhos-madrinhas">Padrinhos</a>
        </li>
        <li>
          <a href="confirmacao-presenca">Você Vai?</a>
        </li>
        <li>
          <a href="lista-presentes">Presentes</a>
        </li>
        <li>
          <a href="local">Local</a>
        </li>
        <li>
          <a href="fornecedores">Fornecedores</a>
        </li>
      </Menu>
    </Container>
  </StyledHeader>
);

export default Header;
