import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-family: 'Parisienne', cursive;
      font-size: 2rem;
      font-weight: normal;
    }
  }
`;
