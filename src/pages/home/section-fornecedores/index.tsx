import React, { RefObject } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';

import { StyledSection } from './styles';

import MarriageDocesFinos from '../../../assets/images/marriage_logo.jpg';
import AnaKarenina from '../../../assets/images/ana_karenina.jpg';
import MarcosAzevedo from '../../../assets/images/marcos_azevedo.jpg';
import GilsonMatias from '../../../assets/images/gilson_matias.jpg';

interface ISectionFornecedores {
  forwardedRef: RefObject<HTMLElement>;
}

const Fornecedores: React.FC<ISectionFornecedores> = ({ forwardedRef }) => {
  return (
    <StyledSection id="fornecedores" ref={forwardedRef}>
      <h1>Fornecedores</h1>
      <div className="fornecedor">
        <span>Bem Casados</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/marriage_docesfinos"
          target="_blank"
        >
          <img src={MarriageDocesFinos} alt="Marriage Doces Finos" />
        </a>
        <span>Marriage Doces Finos</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/marriage_docesfinos"
          target="_blank"
          className="instagram_link"
        >
          <AiOutlineInstagram />
          @marriage_docesfinos
        </a>
      </div>

      <div className="fornecedor">
        <span>Cerimonial</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/anakareninabronzeado"
          target="_blank"
        >
          <img src={AnaKarenina} alt="Ana Karenina" />
        </a>
        <span>Ana Karenina</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/anakareninabronzeado"
          target="_blank"
          className="instagram_link"
        >
          <AiOutlineInstagram />
          @anakareninabronzeado
        </a>
      </div>

      <div className="fornecedor">
        <span>Fotografia</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/marcosazevedoft"
          target="_blank"
        >
          <img src={MarcosAzevedo} alt="Marcos Azevedo" />
        </a>
        <span>Marcos Azevedo</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/marcosazevedoft"
          target="_blank"
          className="instagram_link"
        >
          <AiOutlineInstagram />
          @marcosazevedoft
        </a>
      </div>

      <div className="fornecedor">
        <span>Decoração</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/gilsonmatias_"
          target="_blank"
        >
          <img src={GilsonMatias} alt="Gilson Matias" />
        </a>
        <span>Gilson Matias</span>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/gilsonmatias_"
          target="_blank"
          className="instagram_link"
        >
          <AiOutlineInstagram />
          @gilsonmatias_
        </a>
      </div>
    </StyledSection>
  );
};

export default Fornecedores;
