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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisl
        ut nisl mollis eleifend ut sodales urna. Nam tincidunt mauris non
        lacinia ullamcorper. Curabitur aliquam, purus in pellentesque commodo,
        nisi ante bibendum lorem, ut mattis quam diam sodales mi. Integer orci
        arcu, lobortis a lacus sit amet, tempor laoreet urna. Ut eget ligula
        dignissim, auctor dolor ullamcorper, aliquam dui. Duis vulputate
        ultricies sodales. Suspendisse eu sapien suscipit lectus ornare gravida.
        Suspendisse sodales risus arcu, eget lacinia tortor maximus et.
        Phasellus porta tortor et imperdiet sollicitudin.
      </p>

      <Form elements={elements} noValidate />
    </StyledSection>
  );
};

export default Presenca;
