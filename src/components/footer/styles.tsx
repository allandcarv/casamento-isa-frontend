import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 80%;
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
