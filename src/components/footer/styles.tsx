import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledFooter = styled.footer`
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fffafc;
  border-top: 1px solid rgba(92, 5, 39, 0.1);
  z-index: 2;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  color: #5c0527;

  p {
    font-size: 1rem;

    svg {
      margin: 0 5px;
      vertical-align: middle;
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
`;
