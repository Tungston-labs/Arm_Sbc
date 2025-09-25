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
  background: ${({ bgImage }) => `url(${bgImage}) no-repeat center center/cover`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  background: #0F0A17;
  padding: 40px 30px;
  border-radius: 15px;
  border: 2px solid #948CA3;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.5);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%;
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
`;

export const Title = styled.h3`
  font-size: 1.8rem;
   font-family: 'Roboto', sans-serif;
  margin: 20px 0 25px 0;
  color: #fff;
  font-weight: bold;
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
  font-family: 'Roboto', sans-serif;
  margin: 0 0 6px 8px; /* moved right */
  color: #fff;
  align-self: flex-start;
`;

export const Input = styled.input`
  width: calc(100% - 4px); /* prevents right border cut-off */
  padding: 15px 3px;
  border: 1px solid #AAA4A4;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  background: #2C2C2D;
  color: #fff;
  margin-bottom: 20px;
  box-shadow: inset 0px 2px 6px rgba(53, 50, 50, 0.6);

  &::placeholder {
    color: #bbb; /* lighter placeholder */
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
  color: #AAAAAA;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #8838F2;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #8A38F5;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
