import styled from 'styled-components';

import Banner1 from '../../assets/images/banner1.svg';

export const StyledMain = styled.main`
  flex: 1;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    margin-top: 60px;
    background-color: rgba(92, 5, 39, 0.1);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 15px;
  background-color: #fffafc;

  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }

  > section {
    min-height: calc(100vh - 30px);

    @media only screen and (min-width: 768px) {
      min-height: calc(100vh - 100px);
      scroll-margin-top: 60px;
    }
  }

  #inicio {
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

    h1 {
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
      font-family: 'Lora', serif;
      font-size: 1rem;
      font-style: italic;
      letter-spacing: 1px;
      color: #5c0527;
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

      h1 {
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
  }
`;
