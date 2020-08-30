import React, { useCallback, MouseEvent } from 'react';

import { Container, Menu, StyledHeader } from './styles';

interface IHeader {
  containerRefs: React.RefObject<HTMLElement>[];
}

const Header: React.FC<IHeader> = ({ containerRefs }) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const elementHref = (event.target as HTMLAnchorElement).href;
      const indexOfIdMark = elementHref.indexOf('#');
      const targetId = elementHref.substr(indexOfIdMark + 1);

      containerRefs.forEach(ref => {
        if (ref.current?.getAttribute('id') === targetId) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    [containerRefs],
  );

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <li>
            <a href="#inicio" onClick={handleClick}>
              Início
            </a>
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
};

export default Header;
