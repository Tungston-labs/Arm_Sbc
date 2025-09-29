import styled from "styled-components";

export const SpecCard = styled.div`
  background: #0e0e0e;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  width: 100%;
  margin-bottom: 32px;
`;

export const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 32px;                    
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const SectionHeader = styled.h3`
  font-weight: 600;
  color: #b586ff;
  margin-bottom: 8px;
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 4px;
  font-size: 1rem;          /* default for mobile */

  @media (min-width: 768px) {       /* tablets */
    font-size: 1.2rem;
  }

  @media (min-width: 1920px) {      /* 1080p / 2K */
    font-size: 1.5rem;
  }
 @media (min-width: 2560px) {     
    font-size: 2rem;
  }
  @media (min-width: 3840px) {      /* 4K */
    font-size: 2.5rem;
  }

  @media (min-width: 5120px) {      /* 5K–6K */
    font-size: 1.55rem;
  }


`;


export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const Label = styled.span`
  color: #cccccc;
  font-weight: 500;
  flex: 0 0 45%;
  word-break: break-word;
  font-size: 0.9rem;        /* default mobile */

  @media (min-width: 768px) {     /* tablets */
    font-size: 1rem;
  }

  @media (min-width: 1920px) {    /* 1080p/2K */
    font-size: 1rem;
  }
 @media (min-width: 2560px) {    /* 1080p/2K */
    font-size: 1.8rem;
  }

  @media (min-width: 3840px) {    /* 4K */
    font-size: 2.2rem;
  }

  @media (min-width: 5120px) {    /* 5K–6K */
    font-size: 2.5rem;
  }

 
`;

export const Value = styled.span`
  color: #fff;
  flex: 1;
  text-align: right;
  word-break: break-word;
  font-size: 0.9rem;      

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
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

