import styled from 'styled-components';

export const StyledSection = styled.section`
  p {
    margin-left: 5px;
    margin-right: 5px;
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-align: center;

    & + p {
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }
`;
