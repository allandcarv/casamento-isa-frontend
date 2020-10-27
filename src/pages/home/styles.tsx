import styled from 'styled-components';

export const StyledMain = styled.main`
  flex: 1;
  color: #5c0527;

  > section {
    min-height: calc(100vh - 30px);
    padding: 60px 15px;
    background-color: #fffafc;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    h1 {
      margin-bottom: auto;
      font-family: 'Parisienne', cursive;
      font-size: 2rem;
      font-weight: normal;
      text-align: center;
    }

    h2 {
      font-family: 'Parisienne', cursive;
      font-size: 1.5rem;
      font-weight: normal;
      text-align: center;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 60px auto 40px;
    padding: 0;

    > section {
      padding: 20px 15px;
      min-height: calc(100vh - 100px);
      scroll-margin-top: 60px;

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }

      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  opacity: 0.8;
  z-index: 5;
`;
