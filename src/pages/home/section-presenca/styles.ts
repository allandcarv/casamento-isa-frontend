import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    position: absolute;
    top: 60px;
  }

  p {
    margin: 40px 0 20px;
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    p {
      width: 60%;
      min-width: 650px;
      margin-top: 60px;
      text-align: left;
    }

    form {
      width: 60%;
      min-width: 650px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;

      div.radio_group {
        width: 25%;
      }

      div.number_group {
        width: 35%;

        & + .number_group {
          margin-left: 5%;
        }
      }
    }
  }
`;
