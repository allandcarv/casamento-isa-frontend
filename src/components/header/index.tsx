import React, { useCallback, MouseEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import { Container, Menu, StyledHeader } from './styles';

interface IHeader {
  containerRefs?: React.RefObject<HTMLElement>[];
}

const Header: React.FC<IHeader> = ({ containerRefs }) => {
  const history = useHistory();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const elementHref = (event.target as HTMLAnchorElement).href;
      const indexOfIdMark = elementHref.indexOf('#');
      const targetId = elementHref.substr(indexOfIdMark + 1);

      if (containerRefs) {
        containerRefs.forEach(ref => {
          if (ref.current?.getAttribute('id') === targetId) {
            return ref.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }

          return null;
        });
      }

      return history.push(`/#${targetId}`);
    },
    [containerRefs, history],
  );

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <li>
            <Link to="/#inicio" onClick={handleClick}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/#os-noivos" onClick={handleClick}>
              Os noivos
            </Link>
          </li>
          <li>
            <Link to="/#albuns" onClick={handleClick}>
              Álbuns
            </Link>
          </li>
          <li>
            <Link to="/#instagram" onClick={handleClick}>
              #NossaHashtag
            </Link>
          </li>
          <li>
            <Link to="/#post-it" onClick={handleClick}>
              Post-It
            </Link>
          </li>
          <li>
            <Link to="/#padrinhos" onClick={handleClick}>
              Padrinhos
            </Link>
          </li>
          <li>
            <Link to="/#voce-vai" onClick={handleClick}>
              Você Vai?
            </Link>
          </li>
          <li>
            <Link to="/#presentes" onClick={handleClick}>
              Presentes
            </Link>
          </li>
          <li>
            <Link to="/#local" onClick={handleClick}>
              Local
            </Link>
          </li>
          <li>
            <Link to="/#fornecedores" onClick={handleClick}>
              Fornecedores
            </Link>
          </li>
        </Menu>
        <span className="mobile_button">
          <MdMenu size={30} color="#5c0527" />
        </span>
      </Container>
    </StyledHeader>
  );
};

export default Header;
