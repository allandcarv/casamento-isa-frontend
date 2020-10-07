import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Lora', sans-serif;

  > div {
    width: 100%;
    position: relative;
    padding-bottom: 25px;

    &.radio_group {
      span {
        display: block;
        margin-bottom: 5px;
      }

      label {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
      }
    }

    input[type='radio'] {
      width: 13px;
      margin-right: 5px;
    }
  }

  button {
    padding: 0.375rem 0.75rem;
    font-family: 'Lora', sans-serif;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border: none;
    border-radius: 0.25rem;
    background-color: #5c0527;
  }

  span.error_msg {
    position: absolute;
    bottom: 5px;
    left: 0;
    font-size: 0.8rem;
    color: #c53030;
  }
`;
