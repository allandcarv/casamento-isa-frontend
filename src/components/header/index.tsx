import React, { useState, useCallback, useRef, MouseEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import { Container, Menu, StyledHeader } from './styles';

interface IHeader {
  containerRefs?: React.RefObject<HTMLElement>[];
}

const Header: React.FC<IHeader> = ({ containerRefs }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
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
            if (window.innerWidth < 768) {
              if (menuRef && menuRef.current) {
                menuRef.current.style.left = '100vw';
                setMenuOpened(!menuOpened);
              }
            }
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
    [containerRefs, history, menuOpened],
  );

  const handleMobileMenu = useCallback(() => {
    if (menuRef && menuRef.current) {
      if (menuOpened) {
        menuRef.current.style.left = '100vw';
      } else {
        menuRef.current.style.left = '30vw';
      }
    }

    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  return (
    <StyledHeader>
      <Container>
        <Menu ref={menuRef}>
          <li>
            <Link to="/#inicio" onClick={handleClick}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/#vamos-casar" onClick={handleClick}>
              Vamos Casar
            </Link>
          </li>
          <li>
            <Link to="/#os-noivos" onClick={handleClick}>
              Os noivos
            </Link>
          </li>
          <li>
            <Link to="/#fotos" onClick={handleClick}>
              Fotos
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
        <button
          type="button"
          className="mobile_button"
          onClick={handleMobileMenu}
        >
          <MdMenu size={30} color="#5c0527" />
        </button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
