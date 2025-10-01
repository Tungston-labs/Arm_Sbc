import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (min-width: 768px) { margin-top: 30px; }
  @media (min-width: 1920px) { margin-top: 30px; }
  @media (min-width: 3840px) { margin-top: 30px; }
`;

export const UploadCard = styled.label`
  position: relative;
  width: 90%;
  max-width: 408px;
  height: 200px;
  background-color: #2b2534;
  border-radius: 24px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 768px)  { height: 240px; border-radius: 28px; }
  @media (min-width: 1920px) { max-width: 450px; height: 320px; border-radius: 34px; }
  @media (min-width: 2560px) { max-width: 500px; height: 320px; border-radius: 38px; }
  @media (min-width: 3840px) { max-width: 600px; height: 400px; border-radius: 44px; }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    border: 2px dotted rgba(255, 255, 255, 0.4);
    border-radius: inherit;
    pointer-events: none;
    box-sizing: border-box;
    @media (min-width: 1920px) { border-width: 3px; }
  }
`;

export const UploadIcon = styled.div`
  font-size: 32px;
  color: #aaa;
  margin-top: 18px;

  @media (min-width: 768px) { font-size: 40px; }
  @media (min-width: 1920px) { font-size: 48px; }
  @media (min-width: 2560px) { font-size: 56px; }
  @media (min-width: 3840px) { font-size: 64px; }
`;

export const UploadText = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin: 12px 0 0 0;
  line-height: 1.25;

  @media (min-width: 768px) { font-size: 16px; }
  @media (min-width: 1920px) { font-size: 1.5rem; }
  @media (min-width: 2560px) { font-size: 2rem; }
  @media (min-width: 3840px) { font-size: 24px; }
`;

export const FileInfo = styled.div`
  position: absolute;
  top: calc(70% + 15px);
  left: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 10px;
  color: #fff;
  font-size: 12px;

  @media (min-width: 768px) { font-size: 14px; }
  @media (min-width: 1920px) { font-size:  16px; }
  @media (min-width: 2560px) { font-size: 18px; }
  @media (min-width: 3840px) { font-size: 20px; }
`;

export const Thumb = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 6px;

  @media (min-width: 768px) { width: 28px; height: 28px; }
  @media (min-width: 1920px) { width: 32px; height: 32px; }
  @media (min-width: 2560px) { width: 36px; height: 36px; }
  @media (min-width: 3840px) { width: 44px; height: 44px; }
`;

/* ✖ remove button */
export const RemoveButton = styled.span`
  margin-left: 6px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 50%;
  padding: 0 6px;
  font-size: 14px;
  line-height: 20px;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 0, 0, 0.7);
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
