// src/pages/Dashboard.Styles.js
import styled from "styled-components";

export const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

export const DashboardTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;  // adjust as needed
  margin: 0 0 0.5rem 0;
  color: #FFF;

  /* Fully responsive font-size using clamp */
  font-size: clamp(1.5rem, 2vw, 6rem);
`;


export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 1.4; /* or 36px if you prefer fixed line-height */
  margin: 0;
  color: #DAD7FF;

  /* Responsive font-size for all screens up to 8k */
  font-size: clamp(0.9rem, 1vw, 3rem);
`;


export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
`;

export const Card = styled.div`
border-radius: 17px;
border: 0.5px solid #110324;
background: rgba(43, 37, 52, 0.80);
  border-radius: 12px;
  padding: clamp(1rem, 2vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  backdrop-filter: blur(6px);

  @media (min-width: 2560px) {
    min-height: 250px;
    border-radius: 20px;
  }

  @media (min-width: 7680px) {
    min-height: 350px;
    border-radius: 28px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  line-height: 1.4; /* adjust as needed */
  color: #FFF;
  
  /* Fully responsive font-size */
  font-size: clamp(0.9rem, 1vw, 2.5rem);
`;


export const CardIcon = styled.div`
  font-size: clamp(1.2rem, 1.8vw, 2rem);
  color: #9d4edd;
  opacity: 0.9;
`;

export const CardValue = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700; /* keep bold for value */
  line-height: 1.2; /* adjust as needed */
  margin-top: auto;
  color: #FFF;

  /* Responsive font-size */
  font-size: clamp(1.8rem, 3vw, 3rem);
`;
