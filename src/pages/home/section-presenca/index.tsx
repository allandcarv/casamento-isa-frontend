/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { RefObject } from 'react';

import { StyledSection } from './styles';
import Form from '../../../components/form';

interface ISectionPresenca {
  forwardedRef: RefObject<HTMLElement>;
}

const elements = [
  {
    type: 'text',
    placeholder: 'Insira seu nome.',
    id: 'name',
    name: 'name',
    required: true,
  },
  {
    type: 'email',
    placeholder: 'Insira seu email.',
    id: 'email',
    name: 'email',
    required: true,
  },
  {
    type: 'radio',
    placeholder: '',
    id: 'willGo',
    name: 'willGo',
    required: true,
    span: 'Você vai?',
    values: ['yes', 'no'],
    labels: ['Sim', 'Não'],
  },
  {
    type: 'number',
    placeholder: 'Adultos (Incluindo você)',
    id: 'adults',
    name: 'adults',
    required: true,
  },
  {
    type: 'number',
    placeholder: 'Crianças',
    id: 'children',
    name: 'children',
    required: true,
  },
  {
    type: 'textarea',
    placeholder: 'Tem alguma observação? (Campo não obrigatório)',
    id: 'message',
    name: 'message',
    required: false,
  },
];

const Presenca: React.FC<ISectionPresenca> = ({ forwardedRef }) => {
  return (
    <StyledSection id="presenca" ref={forwardedRef}>
      <h1>Confirmação de Presença</h1>
      <div className="container">
        <p>
          Para podermos preparar tudo com ainda mais carinho, é muito importante
          para nós saber se você vai (ficaremos muito felizes se sim), só
          precisamos que você preencha este formulário.
        </p>

        <Form elements={elements} urlPath="confirmation" noValidate />
      </div>
    </StyledSection>
  );
};

export default Presenca;
