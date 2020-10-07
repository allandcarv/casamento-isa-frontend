import styled, { css } from 'styled-components';

interface InputProps {
  isErrored: boolean;
}

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding: 0.375rem 0.75rem;
  border: 2px solid #ced4da;
  background-color: #fff;
  border-radius: 0.25rem;
  font-family: 'Lora', sans-serif;
  font-size: 1rem;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;
