import styled from 'styled-components';

export const StyledSection = styled.section`
  p {
    margin: 40px 0 20px;
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;

    & + p {
      margin-top: 0;
    }
  }

  div.listas_casamento {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      display: inline-block;
      width: 50%;
      height: auto;
    }
  }

  @media only screen and (min-width: 768px) {
    div.listas_casamento {
      a {
        width: 30%;
      }
    }
  }
`;
