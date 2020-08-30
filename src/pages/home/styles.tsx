import styled from 'styled-components';

import Banner1 from '../../assets/images/banner1.svg';

export const StyledMain = styled.main`
  flex: 1;
  margin-top: 60px;
  background-color: rgba(92, 5, 39, 0.1);
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background-color: #fffafc;

  section {
    height: calc(100vh - 100px);
    scroll-margin-top: 60px;
  }

  #inicio {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      width: 150px;
      height: 150px;
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-image: url(${Banner1});
      filter: invert(8%) sepia(45%) saturate(4740%) hue-rotate(319deg)
        brightness(100%) contrast(106%);
    }

    h1 {
      font-family: 'MarvelousScript', cursive;
      font-size: 10rem;
      font-weight: normal;
      color: #5c0527;
    }

    p {
      font-family: 'Lora', serif;
      font-size: 1.2rem;
      font-style: italic;
      letter-spacing: 1px;
      color: #5c0527;
    }
  }
`;
