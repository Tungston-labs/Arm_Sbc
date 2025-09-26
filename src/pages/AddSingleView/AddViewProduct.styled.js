import styled from "styled-components";

export const AddContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba(137, 99, 211, 1) 0%,
    rgba(17, 3, 36, 1) 20%,
    rgba(3, 2, 6, 1) 30%,
    rgba(3, 2, 6, 1) 100%
  );
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 64px;
`;

export const Header = styled.h1`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: 600;
  @media (max-width: 768px) { font-size: 18px; }
`;

export const SubText = styled.p`
  color: #fff;
  font-size: 20px;
  margin-top: 16px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 768px) { font-size: 14px; }
`;

export const ImageRow = styled.div`
  display: flex;
  align-items: flex-start;   /* keeps tops aligned */
  gap: 40px;
  margin-top: 40px;
  flex-wrap: nowrap;         /* prevent wrap so they stay side-by-side */
`;

export const ImageWrapper = styled.div`
  flex: 0 0 320px;
  background: #2b2534;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBlock = styled.div`
  flex: 1;                  
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
`;


export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  background-color: #363042;
`;



export const HeadingBox = styled.h2`
  color: #fff;
  font-size: 20px;
  width: 130px;
  margin-bottom: 20px;
  border-bottom: 1px solid #fff;
  padding-bottom: 4px;
  font-weight: 500;
`;


export const FormArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1920px) {
    gap: 24px;
  }
  @media (min-width: 2560px) {
    gap: 32px;
  }
  @media (min-width: 3860px) {
    gap: 40px;
  }
`;

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  gap: 10px;

  @media (min-width: 1920px) {
    gap: 20px;
  }
  @media (min-width: 2560px) {
    gap: 30px;
  }
  @media (min-width: 3860px) {
    gap: 40px;
  }
`;

export const FullWidth = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 15px 14px;
  background: #2b2534;
  color: #fff;
  border: none;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;

  @media (min-width: 1920px) {
    font-size: 18px;
    padding: 18px 16px;
  }
  @media (min-width: 2560px) {
    font-size: 20px;
    padding: 20px 18px;
  }
  @media (min-width: 3860px) {
    font-size: 24px;
    padding: 24px 20px;
  }
`;

export const TextArea = styled.textarea`
  padding: 20px 14px;
  background: #2b2534;
  color: #fff;
  border: none;
  border-radius: 6px;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: 16px;
`;
