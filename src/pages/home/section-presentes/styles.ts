import styled from 'styled-components';

export const StyledSection = styled.section`
  div.container {
    flex: 1;
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
        width: 80%;
        height: auto;
        margin-bottom: 50px;

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    div.container {
      display: flex;
      flex-direction: column;
      align-items: space-evenly;
      justify-content: center;
      div.listas_casamento {
        flex-wrap: nowrap;
        justify-content: space-evenly;

        a {
          margin-bottom: 0;
          width: 30%;
        }
      }
    }
  }
`;
