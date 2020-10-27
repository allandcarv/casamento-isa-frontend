import React, { RefObject } from 'react';

import { StyledSection } from './styles';
import { ReactComponent as LogoFerreiraCosta } from '../../../assets/images/logofc.svg';
import LogoTokStok from '../../../assets/images/logo-tokstok.png';

interface ISectionPresentes {
  forwardedRef: RefObject<HTMLElement>;
}

const Presentes: React.FC<ISectionPresentes> = ({ forwardedRef }) => {
  return (
    <StyledSection id="presentes" ref={forwardedRef}>
      <h1>Listas de Presentes</h1>
      <div className="container">
        <p>
          Pensando na comodidade e segurança de vocês, escolhemos lojas que
          disponibilizam a lista de presentes online! Basta clicar no link e
          navegar pela lista até escolher o item que mais lhe agrada.
        </p>
        <p>
          Lembrando que todo o processo de compra e entrega do item é feito
          diretamente pelo site da loja, e de responsabilidade do próprio
          estabelecimento.
        </p>
        <div className="listas_casamento">
          <a
            rel="noopener noreferrer"
            href="https://presentes.ferreiracosta.com/ListaCasamentos/Lista.aspx?URL_Lista=Isabele_e_Leonardo"
            target="_blank"
          >
            <LogoFerreiraCosta />
          </a>

          <a
            rel="noopenet noreferrer"
            href="https://listas.tokstok.com.br/casamento/286408"
            target="_blank"
          >
            <img src={LogoTokStok} alt="Lista de Casamento TokStok" />
          </a>
        </div>
      </div>
    </StyledSection>
  );
};

export default Presentes;
