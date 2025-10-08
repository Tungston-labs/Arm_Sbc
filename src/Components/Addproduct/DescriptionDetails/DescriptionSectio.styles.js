import styled from "styled-components";

export const SpecCard = styled.div`
  background: #0e0e0e;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  width: full;
  margin-bottom: 32px;
`;

export const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* two columns on tablets and above */
    gap: 32px;
  }

  @media (min-width: 1920px) {
    gap: 40px;
  }

  @media (min-width: 2560px) {
    gap: 56px;
  }
`;

export const Section = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 56px;
  }
`;

export const SectionHeader = styled.h3`
  font-weight: 600;
  color: #b586ff;
  margin-bottom: 12px;
  padding-bottom: 4px;
  font-size: 1rem;

  @media (min-width: 600px) {
    
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }

  @media (min-width: 5120px) {
    font-size: 3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;        
  gap: 6px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: row;         
    align-items: flex-start;
    gap: 12px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 20px;
  }
`;

export const Label = styled.span`
  color: #cccccc;
  font-weight: 500;
  min-width: 140px;
  word-break: break-word;
  font-size: 0.9rem;
  gap:12px;

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 0.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.3rem;
  }

  @media (min-width: 2560px) {
    font-size: 1.8rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.2rem;
  }

  @media (min-width: 5120px) {
    font-size: 2.5rem;
  }
`;

export const Value = styled.span`
  color: #fff;
  flex: 1;
  text-align: left;
  word-break: break-word; 
  overflow-wrap: anywhere;
  font-size: 0.9rem;
  line-height: 1.4;

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 0.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.3rem;
  }

  @media (min-width: 2560px) {
    font-size: 1.8rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.2rem;
  }

  @media (min-width: 5120px) {
    font-size: 2.5rem;
  }
`;
