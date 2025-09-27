import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const ResetContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ backgroundImage }) => `url(${backgroundImage}) no-repeat center center/cover`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResetBox = styled.div`
  background: #0F0A17;
  padding: 40px 30px;
  border-radius: 12px;
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
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  max-width: 220px;
  height: auto;
  display: block;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  margin: 15px 0 10px 0;
  color: #FFFFFF;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
  line-height: 1.4;
  margin-bottom: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const OtpWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 25px;
`;

export const OtpInput = styled.input`
  width: 48px;
  height: 52px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #AAA4A4;
  border-radius: 6px;
  background: #FFFFFF;
  color: #0F0A17;
  box-shadow: inset 0px 2px 6px rgba(53, 50, 50, 0.6);

  &::placeholder {
    color: #0F0A17;
  }

  &:focus {
    border-color: #8A38F5;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 83%;
  background: #8A38F5;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const BackLink = styled.a`
  display: block;
  margin-top: 15px;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  color: #ccc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ResendOtp = styled.p`
  margin-top: 15px;
  font-size: 0.8rem;
  color: #8A38F5;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #A159FF;
    text-decoration: underline;
  }
`;
