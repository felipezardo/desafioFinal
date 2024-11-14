import styled from "styled-components";

export const Novidades = styled.section`
  background-color: #1e3932;
  padding: 21.9vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .texto {
    color: #ffffff;
    width: 43.906vw;

    h2 {
      font-size: 1.5;
      font-weight: 700;
      font-family: "Inter", sans-serif;
    }
    h1 {
      font-size: 4rem;
      font-weight: 400;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      background-color: #037143;
      color: white;
      border-style: none;
      font-family: "Inter", sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: 35px;
      padding: 20px 80px;
      margin: 20px 0;
      cursor: pointer;

      &:hover {
        background-color: #025130;
      }
    }
  }
`;