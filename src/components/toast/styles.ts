import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const CustomToastContainer = styled(ToastContainer)`
  top: 0;
  left: 0;
  right: 0;
  width: 300px;
  margin: 0 auto;

  .custom_success {
    background-color: #e6fffa;
    color: #2e656a;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    svg {
      fill: #2e656a;
    }

    .Toastify__progress-bar {
      background-color: #2e656a;
    }
  }

  @media only screen and (min-width: 768px) {
    top: 4rem;
    left: unset;
    right: 1rem;
    margin: unset;
  }
`;
