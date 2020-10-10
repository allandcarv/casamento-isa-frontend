import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface IBackgroundMenu {
  isOpened: boolean;
}

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 4;

  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 100%;
    top: 0;
    background-color: #fffafc;
    border-bottom: 1px solid rgba(92, 5, 39, 0.1);
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .mobile_button {
    background-color: transparent;
    border: none;
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    padding: 0;

    .mobile_button {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  height: 100%;
  width: 70%;
  position: fixed;
  top: 0;
  left: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  transition: left 0.4s;
  background-color: #fffafc;
  border: 1px solid rgba(92, 5, 39, 0.1);
  z-index: 6;

  li {
    & + li {
      margin-top: 20px;
    }

    &.close_buttom {
      width: 100%;
      text-align: right;

      svg {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
      }
    }

    a {
      font-family: 'Lora', serif;
      font-size: 1rem;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1.2px;
      color: #5c0527;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    position: initial;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;

    li {
      & + li {
        margin-top: 0;
        margin-left: 20px;
      }

      &.close_buttom {
        display: none;
      }

      a {
        transition: color 0.3s;

        &:hover {
          color: ${lighten(0.2, '#5c0527')};
        }
      }
    }
  }
`;

export const BackgroundMenu = styled.div<IBackgroundMenu>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  background-color: #000;
  transition: opacity 0.4s;

  ${props =>
    props.isOpened &&
    css`
      visibility: visible;
      opacity: 0.3;
    `}
`;
