import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledFooter = styled.footer`
  height: 30px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fffafc;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    height: 40px;
    border-top: 1px solid rgba(92, 5, 39, 0.1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    font-family: 'Lora', serif;
    font-size: 0.8rem;
    color: rgba(92, 5, 39, 0.4);

    svg {
      margin: 0 5px;
      vertical-align: middle;
      height: 15px;
      width: 15px;
      color: rgba(255, 0, 0, 0.4);
    }

    a {
      margin-left: 4px;
      font-weight: bold;
      text-decoration: none;
      color: rgba(92, 5, 39, 0.4);
    }
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    padding: 0;
    margin: 0 auto;

    p {
      font-size: 1rem;
      color: #5c0527;

      svg {
        color: rgb(255, 0, 0);
      }

      a {
        margin-left: 4px;
        font-weight: bold;
        text-decoration: none;
        color: #5c0527;
        transition: color 0.3s;

        &:hover {
          color: ${lighten(0.2, '#5c0527')};
        }
      }
    }
  }
`;
