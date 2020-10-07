import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    position: absolute;
    top: 60px;
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }
`;
