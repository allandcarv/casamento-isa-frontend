import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 60px;

  p {
    font-family: 'Lora', serif;
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-align: center;

    & + p {
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 30px;

    p {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.2rem;
    }
  }
`;
