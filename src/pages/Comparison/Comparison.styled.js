import styled from "styled-components";

const BORDER = "rgba(255,255,255,0.4)";
const LIGHT = "rgba(255,255,255,0.9)";

export const Container = styled.div`
  background: linear-gradient(155deg, rgb(57, 24, 100) 0%, rgb(10, 6, 15) 17%);
  width: 100%;
  min-height: 100vh;
  padding: 24px 32px 56px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px;
    background: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${LIGHT};
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 12px;

  h1 {
    font-size: clamp(18px, 2.6vw, 32px);
    font-weight: 400;
    margin: 0;
  }
`;
export const EmptyState = styled.div`
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);

  img {
    width: 280px;
    max-width: 90%;
    height: auto;
    margin-bottom: 20px;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    margin: 0;

    strong {
      font-weight: 600;
      color: #fff;
    }
  }

  @media (min-width: 1440px) {
    img {
      width: 320px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 1439px) and (min-width: 1025px) {
    img {
      width: 280px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    img {
      width: 240px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) and (min-width: 480px) {
    img {
      width: 200px;
    }
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 479px) {
    img {
      width: 160px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const RowCell = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
  padding-bottom: 8px;
  touch-action: pan-x;

  @media (min-width: 2000px) {
    padding: 0 40px 12px;
  }
`;

export const RowBox = styled.div`
  --first-col: ${(p) => (p.isHeader ? "260px" : "260px")};
  display: grid;
  grid-template-columns: var(--first-col) repeat(
      ${(p) => Math.max(p.count, 1)},
      minmax(180px, 1fr)
    );
  gap: 0;
  align-items: stretch;
  border: 1px solid ${BORDER};
  border-radius: 10px;
  margin: 14px 0;
  overflow-y: scroll;
  background: transparent;

  min-width: ${(p) => `${260 + Math.max(p.count, 1) * 200}px`};

  @media (max-width: 1400px) {
    grid-template-columns: ${(p) => (p.isHeader ? "180px" : "180px")} repeat(
        ${(p) => Math.max(p.count, 1)},
        minmax(140px, 1fr)
      );
    min-width: ${(p) => `${160 + Math.max(p.count, 1) * 160}px`};
  }
  @media (max-width: 900px) {
    grid-template-columns: ${(p) => (p.isHeader ? "160px" : "160px")} repeat(
        ${(p) => Math.max(p.count, 1)},
        minmax(140px, 1fr)
      );
    min-width: ${(p) => `${160 + Math.max(p.count, 1) * 160}px`};
  }

  @media (max-width: 600px) {
    grid-template-columns: ${(p) => (p.isHeader ? "140px" : "140px")} repeat(
        ${(p) => Math.max(p.count, 1)},
        minmax(120px, 1fr)
      );
    min-width: ${(p) => `${90 + Math.max(p.count, 1) * 140}px`};
  }
`;

export const Cell = styled.div`
  position: relative;
  padding: ${(p) => (p.isHeader ? "28px 20px" : "16px 20px")};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: ${(p) => (p.isHeader ? "260px" : "64px")};
  background: transparent;
  color: ${LIGHT};
  font-family: "Roboto", sans-serif;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: ${BORDER};
    pointer-events: none;
  }

  &:last-child::after {
    display: none;
  }
`;

export const FeatureName = styled(Cell)`
  justify-content: flex-start;
  font-weight: 300;
  color: ${LIGHT};
  font-size: clamp(12px, 1.6vw, 18px);
  min-height: ${(p) => (p.isHeader ? "260px" : "64px")};

  white-space: normal;
  overflow: visible;
  text-overflow: clip;

  @media (max-width: 1024px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 12px;
  }
`;

export const ProductInfoCell = styled(Cell)`
  flex-direction: column;
  text-align: center;
  padding: 28px 20px;
  min-height: 260px;

  img {
    width: 320px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 12px;
    display: block;
    transition: transform 0.2s;
  }

  p {
    margin: 6px 0;
    font-weight: 300;
    font-size: clamp(10px, 1.6vw, 14px);
    color: ${LIGHT};
  }

  button {
    color: white;
    padding: 8px 12px;
    margin-top: 8px;
    width: 120px;
    font-size: 14px;
    border-radius: 8px;
    border: none;
    background-color: #8a38f5;
    cursor: pointer;
  }
  @media (max-width: 1800px) {
    img {
      width: 220px;
      transform: none;
    }
    button {
      width: 90px;
      font-size: 12px;
    }
    min-height: 160px;
  }
  @media (max-width: 1400px) {
    img {
      width: 120px;
      transform: none;
    }
    button {
      width: 90px;
      font-size: 12px;
    }
    min-height: 160px;
  }
  @media (max-width: 1024px) {
    img {
      width: 120px;
      transform: none;
    }
    button {
      width: 90px;
      font-size: 12px;
    }
    min-height: 160px;
  }

  @media (max-width: 600px) {
    img {
      width: 64px;
    }
    button {
      width: 70px;
      font-size: 10px;
    }
    min-height: 120px;
    padding: 10px;
  }
`;

export const FeatureCell = styled(Cell)`
  justify-content: center;
  font-size: clamp(11px, 1.2vw, 14px);
  color: ${LIGHT};
  font-weight: 300;
  min-height: 64px;
  padding: 16px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #8a38f5;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  font-size: clamp(10px, 1.2vw, 16px);

  &:hover {
    opacity: 0.95;
  }
`;

export const RemoveButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 6px;
  z-index: 3;
  border-radius: 6px;

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 2px;
    top: 1px;
    right: 10px;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    font-size: 24px;
    padding: 4px;
    top: 4px;
    right: 10px;
  }

  @media (min-width: 901px) {
    font-size: 28px;
    padding: 8px;
  }
`;

export const RowSpacer = styled.div`
  height: 8px;
`;

export const Main = styled.div`
  color: #fff;
  margin: auto;

  @media (max-width: 900px) {
    background: url("/images/inquiry/backgroundpic.png") no-repeat center center;
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
