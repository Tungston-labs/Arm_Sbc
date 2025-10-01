import styled from "styled-components";

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ backgroundImage }) =>
    `url(${backgroundImage}) no-repeat center center/cover`};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5%;
  position: relative;

 
  @media (max-width: 480px) {
    background: ${({ backgroundMobile }) =>
    `url(${backgroundMobile}) no-repeat center center/cover`};
    text-align: center;
    padding: 1rem;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: ${({ backgroundMobile }) =>
    `url(${backgroundMobile}) no-repeat center center/cover`};
    background-size: contain;
    background-position: center;
    background-color: #07040C; 
    text-align: left;
    padding: 2rem;
    height: 100vh;
  }

 
  @media (min-width: 1024px) and (max-width: 1439px) {
    background: ${({ backgroundImage }) =>
    `url(${backgroundImage}) no-repeat center center/cover`};
     background-size: contain;
     background-color: #0F071B; 
    height: 100vh;
  }

 
  @media (min-width: 1440px) and (max-width: 1799px) {
    background: ${({ backgroundImage }) =>
    `url(${backgroundImage}) no-repeat center `};
    background-size: contain;
    background-color: #0F071B; 
  }

  @media (min-width: 2560px) {
    padding: 0 3%;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }

  
  @media (min-width: 7680px) {
    padding: 0 15%;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }

  @media (min-width: 3860px) {
    padding: 0 15%;
    background-size: cover;
    background-position: center;
    height: 150vh;
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

export const Content = styled.div`
  max-width: 1000px;
  color: #fff;
  z-index: 2;
  text-align: left;

  @media (max-width: 480px) {
    text-align: center;
    max-width: 100%;
    margin-top: 500px;
    padding: 0 10px;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    text-align: center;
    max-width: 70%;
  }

  @media (min-width: 2560px) {
    max-width: 1400px;
  }

  @media (max-width: 768px) {
    max-width: 2000px;
    margin-top: 300px;
    text-align: center;


  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 30px;
    margin-top:40px;

  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 2rem;
    margin-bottom: 15px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 1.9rem;
  }

  @media (min-width: 1800px) {
    font-size: 2.7rem;
  }

  @media (min-width: 2560px) {
    font-size: 3.5rem;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.9rem;
    width: auto;
  }

  @media (min-width: 3860px) {
  font-size: 3.7rem;
    width: auto;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin-top:30px;
  margin-bottom: 30px;
  color: #ffffff;
  


  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.1rem;
    margin-bottom: 15px;
   

  }

  @media (min-width: 481px) and (max-width: 1023px) {
    font-size: 1rem;
  }
   
   @media (max-width: 1024px) {
    font-size: 1rem;
    width: 90%;
    text-align: left;

  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 1rem;
    max-width: 700px;
    

  }

  @media (min-width: 1800px) {
    font-size: 1.2rem;
    width: 800px;

  }

  
  @media (min-width: 2560px) {
    font-size: 1.3rem;
    width: 1200px;


  }

   @media (min-width: 3860px) {
  font-size: 1.9rem;
  
  }
`;

export const ExploreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #a64cff;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  span {
    font-size: 1.2rem;
    margin-top: 4px;
    display: flex;
  }

  &:hover {
    background: #8b3de6;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 14px;
    margin: 10px auto;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 18px;
  }

  @media (min-width: 1800px) {
    font-size: 1.5rem;
    padding: 14px 28px;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
    padding: 18px 36px;
  }

  @media (min-width: 7680px) {
    font-size: 3rem;
    padding: 24px 50px;
  }
`;
