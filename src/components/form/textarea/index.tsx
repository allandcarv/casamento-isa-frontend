import React, { TextareaHTMLAttributes } from 'react';

import { StyledTextArea } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isErrored: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ isErrored, ...rest }) => {
  return <StyledTextArea isErrored={isErrored} {...rest} />;
};

export default TextArea;
