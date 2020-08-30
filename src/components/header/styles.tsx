import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 20px;
  left: 0;

  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 100%;
    top: 0;
    background-color: #fffafc;
    border-bottom: 1px solid rgba(92, 5, 39, 0.1);
    z-index: 2;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    justify-content: center;

    .mobile_button {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  position: fixed;
  top: 60px;
  right: calc(100vw + 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media only screen and (min-width: 768px) {
    position: initial;
    flex-direction: row;
    li {
      & + li {
        margin-left: 20px;
      }

      a {
        font-family: 'Lora', serif;
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 1.2px;
        color: #5c0527;
        transition: color 0.3s;

        &:hover {
          color: ${lighten(0.2, '#5c0527')};
        }
      }
    }
  }
`;
