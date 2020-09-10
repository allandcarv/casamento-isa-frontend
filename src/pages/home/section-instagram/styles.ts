import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    position: absolute;
    left: 0;
    top: 60px;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      top: 20px;
      left: 30px;
    }
  }
`;

export const Container = styled.div`
  ul {
    list-style: none;
    max-width: 100%;

    li {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      text-align: center;

      img {
        margin-top: 20px;
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
      }

      strong {
        margin-top: 20px;
      }
    }
  }
`;
