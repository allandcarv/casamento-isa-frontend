import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isErrored: boolean;
}

const Input: React.FC<InputProps> = ({ isErrored, ...rest }) => {
  return <StyledInput isErrored={isErrored} {...rest} />;
};

export default Input;
