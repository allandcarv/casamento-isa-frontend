import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    position: absolute;
    top: 60px;
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }

  .leaflet-container {
    margin-top: 60px;
    height: calc(100vh - 220px);
    width: 100%;

    > div {
      z-index: 1;
    }

    a {
      margin: 0 5px;
    }
  }

  @media only screen and (min-width: 768px) {
    .leaflet-container {
      margin-top: unset;
      height: 500px;
      width: 80%;
    }
  }
`;
