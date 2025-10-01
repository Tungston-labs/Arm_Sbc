
import styled, { css } from "styled-components";
import { FaEye } from "react-icons/fa";

export const PageTitle = styled.h2`
  font-family: 'Inter';
  font-weight: 700;
  font-style: normal;
  line-height: 1.2; 
  margin: 0 0 0.5rem 0;
  color: #FFF;
  font-size: clamp(1.5rem, 2vw, 6rem);
`;

export const SubTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  color: #DAD7FF;
  font-size: 0.9rem; 
margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  
  @media (min-width: 2560px) {
    font-size: 2rem;
  }

   @media (min-width: 3860px) {
    font-size: 3rem;
  }

  @media (min-width: 7680px) {
    font-size: 4rem;
  }
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: separate; 
  border-spacing: 0 0.5rem; 
  border-radius: 8px;
  overflow: hidden;
   font-family: "Roboto";
`;

export const TableHead = styled.th`
  text-align: center;
  padding: clamp(0.8rem, 0.8vw, 1.5rem); 
  font-size: clamp(0.9rem, 1vw, 2.5rem); 
  background: #8963D3;
  color: #EDE2FC;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:first-child {
    border-top-left-radius: clamp(6px, 1vw, 12px);
  }

  &:last-child {
    border-top-right-radius: clamp(6px, 1vw, 12px);
  }
`;




export const TableRow = styled.tr`
  background: #000000;
  border-radius: 8px;
   font-family: "Roboto";
  td {
     font-family: "Roboto";
    padding: clamp(0.8rem, 0.8vw, 1.5rem); 
  }
`;

export const TableCell = styled.td`
  padding: clamp(0.8rem, 1vw, 1.5rem);
  font-size: clamp(0.85rem, 1vw, 2rem); 
  color: #ddd;
  font-family: "Roboto";
  text-align: center;

  max-width: 150px;   /* adjust per column */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Tooltip-like effect on hover */
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: attr(title);
    position: absolute;
    background: #333;
    color: #fff;
    font-size: 0.8rem;
    padding: 5px 8px;
    border-radius: 4px;
    white-space: normal;
    max-width: 300px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
`;


export const StatusBadge = styled.span`
  display: inline-flex;             
  align-items: center;               
  justify-content: center;         
min-width: clamp(80px, 10vw, 160px);
  padding: clamp(0.2rem, 0.4vw, 0.5rem) clamp(0.5rem, 1vw, 1rem);
  border-radius: clamp(4px, 0.5vw, 8px); 
  font-weight: 600;
  font-size: clamp(0.7rem, 0.9vw, 1.5rem); 
  text-align: center;
   font-family: "Roboto";

 ${({ status }) =>
  status === "pending" &&
  css`
    background: #f97316;
    color: white;
  `}

${({ status }) =>
  status === "open" &&
  css`
    background: #22c55e;
    color: white;
  `}

${({ status }) =>
  status === "closed" &&
  css`
    background: #e53935;
    color: white;
  `}

`;



export const Pagination = styled.div`
  position: fixed;          
  bottom: clamp(1rem, 1.5vw, 2rem);  
  left: clamp(1rem, 1.5vw, 2rem);   
  display: flex;
  align-items: center;
  gap: clamp(0.3rem, 0.8vw, 1rem);  
  flex-wrap: wrap;                    
  z-index: 100;                       
`;

export const ArrowButton = styled.button`
  background: none;          
  border: none;              
  padding: 0;                
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 1vw, 2.5rem); 
  color: ${({ disabled }) => (disabled ? "#bbb" : "#fff")};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ disabled }) => (disabled ? "#bbb" : "#9d4edd")};
  }
`;

export const PageButton = styled.button`
  padding: clamp(0.4rem, 0.6vw, 0.8rem) clamp(0.6rem, 0.9vw, 1.2rem);
  border-radius: clamp(3px, 0.5vw, 6px);      
  border: none;
  cursor: pointer;
  font-size: clamp(0.8rem, 0.8vw, 1.5rem);     
  background: ${({ active }) => (active ? "#8A38F5" : "#353535")};
  color: ${({ active }) => (active ? "#fff" : "#fff")};
  transition: all 0.2s ease;

  &:hover {
    background: #9d4edd;
    color: white;
  }
`;



export const ViewIcon = styled(FaEye)`
  cursor: pointer;
  font-size: clamp(1rem, 1.5vw, 2rem);

  &:hover {
    color: #b76cff;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      width: 200px;
      height: 200px;
    }

@media (min-width: 1440px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 1920px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 2560px) {
      width: 500px;
      height: 500px;
    }

    @media (min-width: 3840px) {
      width: 800px;
      height: 800px;
    }

    @media (min-width: 7680px) {
      width: 800px;
      height: 800px;
    }
  }
`;
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch;

  
  padding-bottom: 1rem;


  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;