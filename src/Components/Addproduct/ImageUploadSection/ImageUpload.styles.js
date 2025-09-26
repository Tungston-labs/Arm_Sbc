import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export const UploadCard = styled.label`
  position: relative;
  width: 408px;
  height: 271px;
  background-color: #2B2534;
  border-radius: 34px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;                      /* dotted border goes only this far down */
    border-style: dotted;
    border-width: 3px 3px 3px 3px;      /* top, right, bottom(0), left */
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 34px 34px 34px 34px;     /* round only the top corners */
    pointer-events: none;
    box-sizing: border-box;
  }
`;

export const UploadIcon = styled.div`
  font-size: 48px;
  color: #aaa;
  margin-top: 18px;
`;

export const UploadText = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 12px 0 0 0;
  line-height: 1.25;
`;

export const FileInfo = styled.div`
  position: absolute;
  top: calc(80% + 10px);  
  left: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 6px 10px;
  color: #fff;
  font-size: 14px;
`;

export const Thumb = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 6px;
  flex: 0 0 28px;
`;

export const HiddenInput = styled.input`
  display: none;
`;
