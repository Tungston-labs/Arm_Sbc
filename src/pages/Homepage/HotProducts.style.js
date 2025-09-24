import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 80px 5%;
  background: linear-gradient(152deg,
    rgba(138, 56, 245, 1) 0%,
    rgba(57, 45, 79, 1) 28%,
    rgba(7, 4, 12, 1) 57%);
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
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
    gap: 16px;
    justify-content: flex-start;
  }
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 16px;
  width: 280px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    scroll-snap-align: center;
  }
`;

export const ProductImage = styled.img`
  height: auto;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  color: #e0e0e0;
  font-family: "Inter", sans-serif;
`;
