import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(200px, 40vh, 600px);
  background: url(${props => props.bg}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 1400px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 1vw, 16px);

  img {
    /* Tie logo height to text scale */
    height: 7rem;   /* 👈 matches font-size of sibling text */
    width: auto;
  }

   
`;

export const LogoText = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;

  /* Match heading scale */
  font-size: clamp(14.8rem, 4vw, 3rem);

  span {
    color: #FFFFFF; 
    margin-right: 5px;
  }
`;

export const PossibilityText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #8A38F5; 
  margin: 0;

  /* Same scale as LogoText */
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (min-width: 769px) {
    text-align: left;
  }

   @media (min-width: 1800px) {
    text-align: right;
    font-size: 4rem;
  }
`;
