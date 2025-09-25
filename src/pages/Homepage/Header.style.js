import styled from "styled-components";

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ backgroundImage }) => `url(${backgroundImage}) no-repeat center center/cover`};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5%;
  box-sizing: border-box;
  position: relative;
  
  @media (max-width: 425px) {
    height: 100vh; 
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  color: #fff;
  z-index: 2; 
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 40px;
  
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
   font-family: "Inter", sans-serif;
  line-height: 1.6;
  margin-bottom: 39px;
  color: #FFFFFF;
 
  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 1441px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const ExploreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #a64cff;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  span {
    font-size: 1.5rem;   
    margin-top: 8px;     
    display: flex;       
  }

  &:hover {
    background: #8b3de6;
    transform: translateY(-2px);
  }
`;

