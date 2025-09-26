import styled from "styled-components";

export const DescriptionCard = styled.div`
  background: #0e0e0e;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  margin-bottom: 24px;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: auto;
`;

export const DescriptionHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #b586ff; 
  margin-bottom: 16px;
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 8px;
`;



export const DescriptionLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #cccccc;
  flex: 0 0 40%;
`;

export const DescriptionValue = styled.span`
  font-size: 0.95rem;
  color: #ffffff;
  flex: 1;
  text-align: right;
  word-break: break-word;
`;

export const DescriptionSectionWrapper = styled.div`
  width: 100%;
  max-width: 11px;
  margin: 0 auto;
  padding: 20px;
`;
