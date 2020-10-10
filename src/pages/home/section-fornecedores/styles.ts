import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    position: absolute;
    top: 60px;
  }

  span {
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }

  .fornecedor {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

    &:not(:last-of-type) {
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(
        to left,
        transparent,
        #5c0527,
        transparent
      );
    }

    & + div {
      margin-top: 20px;
    }

    img {
      margin: 20px 0;
    }

    .instagram_link {
      display: flex;
      align-items: center;
      font-family: 'Lora', serif;
      color: #5c0527;
      text-decoration: none;

      svg {
        margin-right: 5px;
        font-size: 1.2rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .fornecedor {
      width: 25%;
      border-bottom-width: 0;
      border-bottom-style: none;

      & + div {
        margin-top: 0;
        border-left-width: 2px;
        border-left-style: solid;
        border-image-source: linear-gradient(
          to bottom,
          transparent,
          #5c0527,
          transparent
        );
      }
    }
  }
`;
