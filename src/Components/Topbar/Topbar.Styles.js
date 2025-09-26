import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;

  @media (min-width: 768px) {   
    padding: 1.2rem 2rem;
  }

  @media (min-width: 1024px) { 
    padding: 1.5rem 3rem;
  }

  @media (min-width: 1920px) {  
    padding: 3rem 5rem;
  }

  @media (min-width: 2560px) { 
    padding: 3.5rem 6rem;
  }

  @media (min-width: 3840px) {  
    padding: 4rem 8rem;
  }

  @media (min-width: 7680px) { 
    padding: 5rem 12rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    gap: 1rem;
  }

  @media (min-width: 2560px) {
    gap: 1.2rem;
  }

  @media (min-width: 3840px) {
    gap: 1.5rem;
  }
`;

export const Logo = styled.div`
  width: 30px;
  height: auto;

  @media (min-width: 768px) {
    width: 40px;
  }

  @media (min-width: 1920px) {
    width: 60px;
  }

  @media (min-width: 2560px) {
    width: 90px;   
  }

  @media (min-width: 3840px) {
    width: 140px; 
  }

  @media (min-width: 7680px) {
    width: 220px; 
  }
`;

export const BrandName = styled.span`
  font-weight: 700;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 2.8rem; 
  }

  @media (min-width: 3840px) {
    font-size: 3.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 5rem;
  }
`;

export const Hamburger = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: #9d4edd;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1920px) {
    font-size: 3rem;
  }
  @media (min-width: 2560px) {
    font-size: 3.5rem;
  }
  @media (min-width: 3840px) {
    font-size: 4rem;
  }
  @media (min-width: 7680px) {
    font-size: 6rem;
  }
`;

