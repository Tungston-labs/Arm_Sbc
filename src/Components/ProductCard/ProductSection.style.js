import styled from "styled-components";

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
  height: 220px;
  width: 240px;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  color: #e0e0e0;
  font-family: "Inter", sans-serif;
`;
