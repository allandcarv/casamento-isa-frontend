import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }

  .leaflet-container {
    margin-top: 20px;
    flex: 1;
    width: 100%;

    > div {
      z-index: 1;
    }

    .googlemaps_link {
      margin: 0 5px;
    }

    .leaflet-control-container {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    .leaflet-container {
      width: 80%;
    }
  }
`;
