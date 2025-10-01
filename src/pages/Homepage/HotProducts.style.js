import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 80px 5%;
  background: linear-gradient(
    152deg,
    rgba(138, 56, 245, 1) 0%,
    rgba(57, 45, 79, 1) 28%,
    rgba(7, 4, 12, 1) 57%
  );
  color: #fff;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
    
  @media (max-width: 3860px) {
    font-size: 3rem;
    padding: 0 15px;  
  }
`;
