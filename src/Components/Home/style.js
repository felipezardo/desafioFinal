import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    display: flex;
    justify-content: space-between;
    padding: 60px 25px 0 100px;

    .texto {
      
      margin-right: 580px;
    
      h2 {
        font-size: 4rem;
        font-weight: 400;
        font-family: "Inter", sans-serif;
        color: #000000cc;
        height: 60px;
      }
      h1 {
        font-size: 4rem;
        font-weight: 400;
        height: 120px;
        span {
          font-size: 6rem;
          font-weight: 700;
          color: #037143;
        }
      }

      p {
        font-size: 1.5rem;
        
      }

      button{
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

        &:hover{
          background-color: #025130;
        }

      }
    }
  }

  .circulo {
    
    background-color: ${(props) => props.$corCirculo}; 
    border-radius: 50%;
    width: 946px;
    height: 926px;
    position: fixed;
    bottom: -450px; 
    right: -400px; 
    display: flex;
    align-items: center;
    justify-content: center;
    transition:0.4s ease;
  }

  .copo {
    position: relative;
    top: -310px; 
    right: 150px;
    transition: 0.8s ease;
    &:hover{
      transform: scale(1.3) translateY(-100px);
    }
    
  } 

  .copinhos{
    margin-top: 10vh;
    

    .laranja,
    .vermelho,
    .amarelo {
      
      margin: 0 10px;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        transform: translateY(-8px) rotate(10deg);
      }
    }

  }

`;
