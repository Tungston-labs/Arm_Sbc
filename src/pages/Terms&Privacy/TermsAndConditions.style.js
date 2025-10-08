import styled from "styled-components";

export const TermsContainer = styled.section`
  background-color: #0E0619;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 60px 40px 40px;
  }

  @media (min-width: 1200px) {
    padding: 70px 100px 50px;
  }
`;

export const TermsTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px; /* Reduced gap between title and intro */

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

export const TermsIntro = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  max-width: 1000px;
  margin-bottom: 35px; 
  line-height: 2.6;

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;

export const TermsContent = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  max-width: 1000px;
  color: #FFFFFF;

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;

export const TermsItem = styled.p`
  margin-bottom: 12px; /* Slightly tighter spacing */
  text-align: justify;

  strong {
    color: #fff;
  }

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 18px;
  }
`;

export const Main = styled.div`
  color: #fff;
  margin: auto;

  @media (max-width: 900px) {
    background: url("/images/inquiry/backgroundpic.png") no-repeat center center;
    background-size: cover;
  }

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2rem;
  }
`;

export const NavbarContainer = styled.div`
 color: #fff;
  margin: auto;

  @media (max-width: 900px) {
    background: linear-gradient(155deg, rgb(57, 24, 100) 0%, rgb(10, 6, 15) 17%);
    background-size: cover;
    padding: 1rem;
  }

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2rem;
  }
`;
