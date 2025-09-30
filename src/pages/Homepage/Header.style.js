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

export const Main = styled.div`
  color: #fff;
  margin: auto;

  @media (max-width: 900px) {
     background: url('/images/inquiry/backgroundpic.png') no-repeat center center;
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


export const Content = styled.div`
  max-width: 1000px;
  color: #fff;
  z-index: 2; 
  text-align: left;
`;
export const Title = styled.h1`
  font-size: 1.6rem; /* base for mobile first */
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 40px;
  color: #FFFFFF;


  /* Small screens */
  @media (min-width: 481px) {
    font-size: 2rem;
  }

  @media (min-width: 769px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  /* Larger screens */
  @media (min-width: 1800px) {
    font-size: 1.5rem;

  }

  @media (min-width: 2560px) {
    font-size: 2.7rem;
  }

@media (min-width: 3860px) {
    font-size: 4.5rem;
    width: 1900px;

  }
`;



export const Description = styled.p`
  font-size: 1rem;
   font-family: "Inter", sans-serif;
  line-height: 1.6;
  margin-bottom: 39px;
  color: #FFFFFF;
 
   @media (min-width: 481px) {
    font-size: 0.5rem;
  }

  @media (min-width: 769px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.8rem;
    width: 600px;
  }

  /* Larger screens */
  @media (min-width: 1800px) {
    font-size: 1rem;
    width: 650px;


  }

  @media (min-width: 2560px) {
    font-size: 2rem;
        width: 1200px;


  }

  @media (min-width: 3860px) {
    font-size: 3rem;
            width: 1900px;

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

