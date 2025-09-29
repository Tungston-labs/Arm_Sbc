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
  background: ${({backgroundimage }) =>
    `url(${backgroundimage}) no-repeat center center/cover`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResetBox = styled.div`
  background: #0f0a17;
  padding: 40px 30px;
  border-radius: 12px;
  border: 2px solid #948ca3;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
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
  margin: 15px 0 10px 0;
  color: #ffffff;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #ffffff;
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
  border: 1px solid #aaa4a4;
  border-radius: 6px;
  background: #ffffff;
  color: #0f0a17;
  box-shadow: inset 0px 2px 6px rgba(53, 50, 50, 0.6);

  &::placeholder {
    color: #0f0a17;
  }

  &:focus {
    border-color: #8a38f5;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 87%;
  background: #8a38f5;
  color: #fff;
  font-size: 16px;
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

export const BackLink = styled.span`
  display: block;
  margin-top: 15px;
  font-size: 0.7rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ResendOtp = styled.p`
  margin-top: 15px;
  font-size: 0.8rem;
  color: #8a38f5;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a159ff;
    text-decoration: underline;
  }
`;
