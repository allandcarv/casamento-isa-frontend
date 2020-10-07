import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const CustomToastContainer = styled(ToastContainer)`
  top: 0;
  left: 0;
  right: 0;
  width: 300px;
  margin: 0 auto;

  .custom_success {
    background-color: #fffafc;
    color: #5c0527;

    svg {
      fill: #5c0527;
    }

    .Toastify__progress-bar {
      background-color: #5c0527;
    }
  }

  @media only screen and (min-width: 768px) {
    top: 4rem;
    left: unset;
    right: 1rem;
    margin: unset;
  }
`;
