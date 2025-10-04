import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px; 
  background: url(${props => props.bg}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; 

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 9re,;
    height: 9rem;

    @media (max-width: 768px) {
     width: 9re,;
    height: 9rem;
    }

    @media (max-width: 425px) {
     width: 3re,;
    height: 3rem;
    }

   @media (max-width: 250px) {
     width: 2re,;
    height: 2rem;
    }

  }
`;

export const LogoText = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #FFFFFF;
  font-size: clamp(1rem, 3vw, 2rem);
  margin: 0;

  span {
    color: #FFFFFF; 
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PossibilityText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #8A38F5; 
  font-size: clamp(1.2rem, 4vw, 2rem);
  margin: 0;

  @media (max-width: 768px) {
    text-align: right;
    font-size: 0.9rem;
  }

  @media (max-width: 3860px) {
    text-align: right;
    font-size: 1.5rem;
  }

`;
