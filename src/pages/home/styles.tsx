import styled from 'styled-components';

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
    padding-top: 60px;
    padding-bottom: 60px;

    h1 {
      font-size: 2rem;
      font-weight: normal;
      text-align: center;
    }

    @media only screen and (min-width: 768px) {
      min-height: calc(100vh - 100px);
      scroll-margin-top: 60px;
      padding: 60px;

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
