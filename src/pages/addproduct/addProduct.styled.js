import styled from "styled-components";

export const AddContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(155deg, rgb(57, 24, 100) 0%, rgb(10, 6, 15) 17%); */
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  margin-top:-80px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
`;

export const Header = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;

  font-size: 20px;
  width: auto;
  margin: 0;

  @media (min-width: 480px) {
    font-size: 24px;
    width: auto;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1920px) {
    font-size: 36px;
  }
 @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
  @media (min-width: 3880px) {
    font-size: 3.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 64px;
  }
`;


export const Button = styled.button`
  color: white;
  padding: 10px;
  width: 200px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #8a38f5;
  font-family: "Roboto", sans-serif;
  @media(max-width:768px){
      font-size: 14px;
       padding: 5px;
       width: 100px;
  }
`;

export const Text = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-top: 24px;
 margin-bottom: -0px;
  font-size: 16px;

  @media (min-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 22px;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 40px;
  }
`;


