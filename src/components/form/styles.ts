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

    input:not([type='radio']),
    textarea {
      width: 100%;
      padding: 0.375rem 0.75rem;
      border: 1px solid #ced4da;
      background-color: #fff;
      border-radius: 0.25rem;
      margin-bottom: 20px;
      font-family: 'Lora', sans-serif;
      font-size: 1rem;
    }

    input:not([type='radio']) {
      height: 40px;
    }
  }

  div.radio_group {
    width: 100%;
    margin-bottom: 20px;

    span {
      width: 100%;
      margin-bottom: 10px;
    }

    label {
      margin-right: 20px;
      display: block;

      input {
        width: initial;
        margin-right: 10px;
      }
    }
  }

  textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    background-color: #fff;
    border-radius: 0.25rem;
    margin-bottom: 20px;
    font-family: 'Lora', sans-serif;
    font-size: 1rem;
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
`;
