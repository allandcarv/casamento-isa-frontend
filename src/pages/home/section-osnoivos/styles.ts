import styled from 'styled-components';

export const StyledSection = styled.section`
  div.pictures {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    > img {
      margin-top: -150px;
      width: 45%;
      max-width: 100%;
      transform: rotate(180deg);
      border: none;
      z-index: 3;
    }

    div {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        border: 2px solid #fff;
      }

      span {
        display: inline-block;
        margin-top: 10px;
        font-family: 'MarvelousScript', cursive;
        font-size: 2rem;
      }
    }

    div.noivo {
      flex-direction: column-reverse;

      img {
        display: inline-block;
        margin-right: -20px;
      }
    }

    div.noiva {
      flex-direction: column;

      img {
        display: inline-block;
        margin-left: -20px;
      }
    }
  }

  p {
    margin-left: 5px;
    margin-right: 5px;
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-align: center;

    & + p {
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    div.container {
      flex: 1;

      div.pictures {
        position: relative;
        margin-bottom: 60px;

        > img {
          position: absolute;
          bottom: 60px;
          width: 350px;
        }

        div {
          img {
            width: 500px;
          }
        }

        div.noivo {
          align-items: flex-end;

          span {
            margin-right: 190px;
            font-size: 3rem;
          }
        }

        div.noiva {
          align-items: flex-start;

          span {
            margin-left: 190px;
            font-size: 3rem;
          }
        }
      }
    }
  }
`;
