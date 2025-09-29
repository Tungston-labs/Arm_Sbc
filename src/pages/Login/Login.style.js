import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ backgroundImage }) =>
    `url(${backgroundImage}) no-repeat center center/cover`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: auto; 
    min-height: 100vh;
    padding: 15px;
  }

  @media (max-width: 768px) {
    height: auto; 
    min-height: 100vh;
    padding: 15px;
  }

  /* Large screens */
  @media (min-width: 1920px) {
    padding: 30px;
  }

  @media (min-width: 2560px) {
    padding: 50px;
  }

  @media (min-width: 3840px) {
    padding: 80px;
  }
`;

export const LoginBox = styled.div`
  background: #0f0a17;
  padding: 40px 40px 40px 40px;
  border-radius: 15px;
  border: 2px solid #948ca3;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  
  @media (max-width: 250px) {
    padding: 20px 15px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    border-radius: 10px;
  }

  /* Large screens */
  @media (min-width: 1920px) {
    max-width: 500px;
    padding: 50px;
  }

  @media (min-width: 2560px) {
    max-width: 600px;
    padding: 60px;
  }

  @media (min-width: 3840px) {
    max-width: 900px;
    padding: 90px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Logo = styled.img`
  max-width: 220px;
  height: auto;
  display: block;

  @media (max-width: 480px) {
    max-width: 160px;
  }

  @media (min-width: 2560px) {
    max-width: 260px;
  }

  @media (min-width: 3840px) {
    max-width: 320px;
  }
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-family: "Roboto", sans-serif;
  margin: 20px 0 25px 0;
  color: #fff;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 15px 0 20px 0;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin: 0 0 6px 8px;
  color: #FFFFFF;
  align-self: flex-start;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 2560px) {
    font-size: 1.1rem;
  }

  @media (min-width: 3840px) {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 10px;
  border: 1px solid #aaa4a4;
  border-radius: 6px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  background-color: #2C2C2D !important; 
  color: #FFFFFF !important;            
  margin-bottom: 20px;
  box-shadow: 
  inset 4px 4px 4px rgba(68, 67, 66, 0.92),  
  inset -4px -4px 4px rgba(68, 67, 66, 0.92), 
  inset 4px -4px 4px rgba(68, 67, 66, 0.92), 
  inset -4px 4px 4px rgba(68, 67, 66, 0.92); 
   
 &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #2C2C2D inset !important;
    -webkit-text-fill-color: #ffffffff !important;
    transition: background-color 5000s ease-in-out 0s;
  } 
 
  &::placeholder {
    color: #48484A;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin: 20px 20px 6px 8px;
  }

  @media (max-width: 300px) {
    padding: 12px 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-right: 15px;
    font-size: 14px;
  }

  @media (min-width: 2560px) {
    padding: 16px;
    font-size: 15px;
  }

  @media (min-width: 3840px) {
    padding: 18px;
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 40%;
  right: 14px;
  transform: translateY(-50%);
  color: #aaaaaa;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #8838f2;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    right: 10px;
  }

  @media (min-width: 2560px) {
    font-size: 20px;
  }

  @media (min-width: 3840px) {
    font-size: 22px;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 2560px) {
    font-size: 1rem;
  }

  @media (min-width: 3840px) {
    font-size: 1.1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #8a38f5;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }

  @media (min-width: 2560px) {
    font-size: 22px;
    padding: 14px;
  }

  @media (min-width: 3840px) {
    font-size: 24px;
    padding: 16px;
  }
`;
