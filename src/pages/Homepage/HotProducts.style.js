import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 150px 5%;
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
  font-size: 2rem;
  font-weight: 550;
  text-align: center;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 30px;
  margin-top: -70px;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
