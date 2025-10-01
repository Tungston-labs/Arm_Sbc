import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 65px;

  @media (min-width: 1920px) {
    gap: 20px;
    margin-top: 24px;
  }
  @media (min-width: 2560px) {
    gap: 28px;
    margin-top: 32px;
  }
  @media (min-width: 3860px) {
    gap: 36px;
    margin-top: 48px;
  }
`;

export const LabelInputBox = styled.div`
  margin-top: 80px;

  @media (min-width: 1920px) {
    margin-top: 100px;
  }
  @media (min-width: 2560px) {
    margin-top: 120px;
  }
  @media (min-width: 3860px) {
    margin-top: 150px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;

  @media (min-width: 1920px) {
    gap: 60px;
    margin-bottom: 60px;
  }
  @media (min-width: 2560px) {
    gap: 80px;
    margin-bottom: 80px;
  }
  @media (min-width: 3860px) {
    gap: 100px;
    margin-bottom: 100px;
  }
`;

export const TextBox = styled.div`
  width: 220px;
  font-size: 16px;
  color: #fff;
  padding-top: 6px;
  display: flex;
  align-items: flex-start;

  @media (min-width: 1920px) {
    font-size: 20px;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3860px) {
    font-size: 2.5rem;
  }
`;

export const LabelInline = styled.span`
  display: inline-block;
  border-bottom: 1px solid #fff;
  padding-bottom: 4px;
  line-height: 1;

  @media (min-width: 1920px) {
    font-size: 18px;
  }
  @media (min-width: 2560px) {
    font-size: 22px;
  }
  @media (min-width: 3860px) {
    font-size: 26px;
  }
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
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;

  @media (min-width: 1920px) {
    font-size: 18px;
    padding: 18px 16px;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
    padding: 20px 18px;
  }
  @media (min-width: 3860px) {
    font-size: 2rem;
    padding: 24px 20px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 16px;
  gap: 12px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    gap: 16px;
  }
  @media (min-width: 1920px) {
    gap: 24px;
  }
  @media (min-width: 2560px) {
    gap: 32px;
  }
`
export const AddButton = styled.button`
  background-color: #5a06c7;
  color: #fff;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 16px;
  min-width: 100px;
  @media (min-width: 768px) {
    min-width: 120px;
    font-size: 17px;
  }
  @media (min-width: 1920px) {
    min-width: 140px;
    font-size: 18px;
  }
  @media (min-width: 2560px) {
    min-width: 160px;
    font-size: 20px;
  }
  `
  export const CancelButton = styled.button`
  background-color: white;
  color: #000;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 16px;
  min-width: 100px;
  @media (min-width: 768px) {
    min-width: 120px;
    font-size: 17px;
  }
  @media (min-width: 1920px) {
    min-width: 140px;
    font-size: 18px;
  }
  @media (min-width: 2560px) {
    min-width: 160px;
    font-size: 20px;
  }
`;
export const TextArea = styled.textarea`
  padding: 24px 14px;
  background: #2b2534;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: 16px;

  @media (min-width: 1920px) {
    font-size: 18px;
    padding: 28px 16px;
  }
  @media (min-width: 2560px) {
    font-size: 20px;
    padding: 32px 18px;
  }
  @media (min-width: 3860px) {
    font-size: 24px;
    padding: 36px 20px;
  }
`;
