import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5vw;
  font-family: "Poppins", sans-serif;

  font-size: 1.5rem;

  nav {
    margin: 0 5vw;
    ul {
      list-style: none;
      display: flex;
      li {
        margin: 0 2vw;
      }

      a {
        text-decoration: none;
        color: #1e3932;

        &:hover {
          color: #037143;
        }
      }
    }
  }
`;
