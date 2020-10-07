import styled, { css } from 'styled-components';

interface TextAreaProps {
  isErrored: boolean;
}

export const StyledTextArea = styled.textarea<TextAreaProps>`
  width: 100%;
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
