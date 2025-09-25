import styled from "styled-components";

export const AddContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba(137, 99, 211, 1) 0%,
    rgba(17, 3, 36, 1) 20%,
    rgba(3, 2, 6, 1) 30%,
    rgba(3, 2, 6, 1) 100%
  );
  display: flex;
  flex-direction: column;
  padding: 0 32px;
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
    @media(max-width:768px){
      font-size: 18px;
       width: 100px;
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
  font-size: 22px;
  font-weight: 400;
  margin-top: 24px;
  font-family: "Roboto", sans-serif;
    @media(max-width:768px){
      font-size: 14px;
     
  }
`;


