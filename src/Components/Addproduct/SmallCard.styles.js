import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  gap: 24px;
  margin: 32px 0;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); /* ≥2600px */


  @media (max-width: 2600px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  /* medium/large laptops */
  @media (max-width: 1800px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  /* tablets */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  /* phones */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Card = styled.div`
  background: #ffffff26;
  border-radius: 15px;
  padding: 26px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  font-family: "Roboto", sans-serif;
`;

export const CardImage = styled.img`
  width: clamp(120px, 12vw, 180px); /* scales with screen */
  margin-bottom: 12px;
`;

export const CardTitle = styled.p`
  font-size: clamp(16px, 1.2vw, 22px);
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
`;

export const CardDetail = styled.p`
  font-size: clamp(14px, 1vw, 20px);
  margin: 2px 0;
`;

export const CardDetailsWrap = styled.div`
  width: 100%;
  text-align: left;
`;
