import React, { useState, useCallback, useRef, MouseEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import { Container, Menu, BackgroundMenu, StyledHeader } from './styles';

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

  function handleMenuMobile() {
    if (menuRef && menuRef.current) {
      if (menuOpened) {
        menuRef.current.style.left = '100vw';
      } else {
        menuRef.current.style.left = '30vw';
      }
    }

    setMenuOpened(!menuOpened);
  }

  return (
    <StyledHeader>
      <Container>
        <BackgroundMenu isOpened={menuOpened} />
        <Menu ref={menuRef}>
          <li className="close_buttom">
            <MdClose size={30} color="#5c0527" onClick={handleMenuMobile} />
          </li>
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
            <Link to="/#album" onClick={handleClick}>
              Álbum
            </Link>
          </li>
          <li>
            <Link to="/#instagram" onClick={handleClick}>
              #NossaHashtag
            </Link>
          </li>
          <li>
            <Link to="/#mensagens" onClick={handleClick}>
              Mensagens
            </Link>
          </li>
          <li>
            <Link to="/#presenca" onClick={handleClick}>
              Presença
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
          onClick={handleMenuMobile}
        >
          <MdMenu size={30} color="#5c0527" />
        </button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
