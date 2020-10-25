import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;

  > h1 {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  p {
    margin: 40px 0 20px;
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }

  div.swiper-container {
    margin-top: 20px;
    width: 100%;
    position: relative;

    div.swiper-wrapper {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      box-sizing: content-box;

      div.swiper-slide {
        flex-shrink: 0;
        height: 100%;
        position: relative;
        transition-property: transform;

        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      top: 60px;
    }

    p {
      margin-top: 60px;
    }
  }
`;
