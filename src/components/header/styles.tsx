import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fffafc;
  border-bottom: 1px solid rgba(92, 5, 39, 0.1);
  z-index: 2;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

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
`;
