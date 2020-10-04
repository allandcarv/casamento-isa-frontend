import styled, { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const LoadingElement = styled.p`
  &.loading {
    font-family: 'Parisienne', cursive;
    font-size: 2rem;
  }

  span.firstDot,
  span.secondDot,
  span.thirdDot {
    animation-name: ${dotAnimation};
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-duration: 1s;
  }

  span.secondDot {
    animation-delay: 0.2s;
  }

  span.thirdDot {
    animation-delay: 0.4s;
  }
`;
