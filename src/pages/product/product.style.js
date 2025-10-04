import styled from "styled-components";

export const AllProductContainer = styled.section`
  width: 100%;
background: linear-gradient(155deg, rgb(96, 40, 170) 0%, rgb(10, 6, 15) 17%);
  color: white;
  padding-block: 2rem;

  @media (max-width: 768px) {
    background: none;
 
  }
`;

export const ProductHeader = styled.h2`
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
  font-family: "Montserrat";
  margin-bottom: 5rem;
font-weight:600;
 @media (width>=375px) {
    font-size: 1.8rem;
      margin-bottom: 0.5rem;
  }
   @media (width>=425px) {
    font-size: 1.8rem;
      margin-bottom: 1rem;
  }
  @media (width>=768px) {
    font-size: 2rem;
      margin-bottom: 1rem;
  }

  @media (width>=1024px) {
    font-size: 2.5rem;
  }
  @media (width>=1280px) {
    font-size: 2.5rem;
  }
  @media (width>=1440px) {
    font-size: 3rem;

  }  @media (width>=1960px) {
    font-size: 3.75rem;
  }
  @media (width>=2560px) {
    font-size: 4.5rem;
    padding-top: 3rem;
  }
  @media (width>=3840px) {
    font-size: 8rem;
    padding-top: 4rem;
  }
`;

export const ProductCardContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem 7rem;
    gap: 2rem 1.5rem;
  }
  @media (width>=1280px) {
    padding: 3rem 13rem;
    gap: 3rem 2rem;
  }
  @media (width>=1536px) {
    padding: 4rem 20rem;
    gap: 4rem 2rem;
  }
  @media (width>=2560px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 5rem 17rem;
    gap: 5rem 3rem;
  }
  @media (width>=3840px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 6rem 15rem;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  text-align: center;
  background: transparent;
  color: gray;
  @media (width>=1024px) {
    height: 500px;
  }
`;
