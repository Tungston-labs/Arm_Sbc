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
  padding: 40px 20px 20px 40px;
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
  margin: 25px 20px 20px 5px;
  color: #FFFFFF;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 0.80rem;
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 25px;
  margin-right: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
Email

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0 0 10px 8px;
  color: #fff;
  align-self: flex-start;
`;

export const Input = styled.input`
  width: calc(95% - 4px);
  padding: 14px 10px;
  border: 1px solid #AAA4A4;
  border-radius: 6px;
  font-size: 14px;
  background: #2C2C2D;
  color: #fff;
  margin-bottom: 20px;
  box-shadow: 
  inset 4px 4px 4px rgba(68, 67, 66, 0.92),   /* top-left */
  inset -4px -4px 4px rgba(68, 67, 66, 0.92), /* bottom-right */
  inset 4px -4px 4px rgba(68, 67, 66, 0.92),  /* top-right */
  inset -4px 4px 4px rgba(68, 67, 66, 0.92);  /* bottom-left */

Email

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  width: 94%;
  background: #8A38F5;
  color: #fff;
  font-family: 'Roboto', sans-serif;
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

export const BackLink = styled.a`
  display: block;
  font-family: 'Roboto', sans-serif;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: center;
  margin-right: 15px;
  font-size: 0.7rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

