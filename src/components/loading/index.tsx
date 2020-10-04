import React from 'react';

import { LoadingElement } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadingElement className="loading">
      Carregando
      <span className="firstDot">.</span>
      <span className="secondDot">.</span>
      <span className="thirdDot">.</span>
    </LoadingElement>
  );
};

export default Loading;
