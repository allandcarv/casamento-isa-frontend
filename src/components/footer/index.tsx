import React from 'react';
import { MdFavorite } from 'react-icons/md';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <p>
          Developed with
          <MdFavorite size={20} color="#ff0000" />
          by
          <a href="mailto:allandcarv@gmail.com">Allan Carvalho</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
