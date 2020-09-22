import styled from 'styled-components';

import Banner1 from '../../../assets/images/banner1.svg';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    background-image: url(${Banner1});
    filter: invert(8%) sepia(45%) saturate(4740%) hue-rotate(319deg)
      brightness(100%) contrast(106%);
  }

  h1.main_title {
    font-family: 'MarvelousScript', cursive;
    font-size: 5rem;
    font-weight: normal;
    text-align: center;
    color: #5c0527;

    span {
      display: block;
    }
  }

  p {
    margin-top: 55px;
    font-family: 'Lora', serif;
    font-size: 1rem;
    font-style: italic;
    letter-spacing: 1px;
    color: #5c0527;
  }

  div.counter {
    margin-top: 10px;

    p {
      margin-top: 5px;
      font-size: 0.8rem;

      strong {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    i {
      width: 150px;
      height: 150px;
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    h1.main_title {
      font-size: 10rem;

      span {
        display: inline;
        margin: 0 50px;
      }
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
