import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalCard = styled.div`
  background: #000;
  padding: 80px 120px;
  max-width: 72vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  position: relative;

  @media (max-width: 2600px) {
    padding: 100px 120px;
  }

  @media (min-width: 2560px) {
    padding: 120px 160px;
    max-width: 90vw;
  }
  @media (min-width: 3860px) {
    padding: 140px 220px;
    max-width: 98vw;
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
`;

export const SubHeader = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin: 0;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
  @media (min-width: 2560px) {
    font-size: 28px;
  }
  @media (min-width: 3860px) {
    font-size: 36px;
  }
`;

export const InnerGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 8px;
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
      border-color: #8A38F5;
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
    font-size: 8px;
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
