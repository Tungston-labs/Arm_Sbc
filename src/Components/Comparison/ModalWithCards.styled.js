import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 15, 15, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const ModalCard = styled.div`
  background: #000;
  padding: 80px 120px;
  max-width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  position: relative;

  /* Large screens (4K+) */
  @media (min-width: 3840px) {
    padding: 140px 220px;
    max-width: 98vw;
  }

  @media (min-width: 2560px) and (max-width: 3839px) {
    padding: 120px 160px;
    max-width: 90vw;
  }

  /* Wide screens (1600px–2559px) */
  @media (min-width: 1600px) and (max-width: 2559px) {
    padding: 100px 120px;
    max-width: 75vw;
  }

  /* Tablet screens (769px–1599px) */
  @media (min-width: 769px) and (max-width: 1599px) {
    padding: 60px 80px;
    max-width: 70vw;
    gap: 20px;
  }

  /* Mobile screens (up to 768px) */
  @media (max-width: 768px) {
    padding: 20px;
    max-width: 75vw;
    gap: 16px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  margin: 0 0 4px 0;
  font-family: "Roboto", sans-serif;

  @media (min-width: 2560px) {
    font-size: 48px;
  }
  @media (min-width: 3860px) {
    font-size: 64px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SubHeader = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin: 0;
  font-family: "Roboto", sans-serif;
  @media (min-width: 3860px) {
    font-size: 42px;
  }
  @media (min-width: 2560px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
    width: 100%;
  }
`;
export const InnerGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  overflow-x: auto;   
  padding-bottom: 8px;
  scroll-behavior: smooth; 
  -webkit-overflow-scrolling: touch; 

  scrollbar-width: thin;          
  scrollbar-color: #bbb transparent;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const ProductCard = styled.div`
  flex: 0 0 260px;
  background: #ffffff26;
  padding: 32px 16px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border: 3px solid transparent;

  ${({ $selected }) =>
    $selected &&
    `
      border-color: rgba(138, 56, 245, 1);
      box-shadow: 0 0 12px #8A38F5;
    `}

  img {
    width: 120px;
    height: auto;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.4;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 768px) {
    flex: 0 0 160px;
    padding: 16px 8px;

    img {
      width: 80px;
      margin-bottom: 12px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const CompareButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  background-color: #8a38f5;
  color: white;
  font-size: 14px;
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #732fd0;
  }

  @media (max-width: 3900px) {
    font-size: 32px;
  }
  @media (max-width: 2600px) {
    font-size: 24px;
  }
  @media (max-width: 1600px) {
    font-size: 12px;
  }
  @media (max-width: 1100px) {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 6px;
    bottom: 0px;
    right: 12px;
  }
  @media (max-width: 440px) {
    font-size: 12px;
    padding: 6px 6px;
    bottom: 0px;
    right: 12px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #ff4d4f;
  }
`;
