


// src/pages/Enquiry/Enquiry.Styles.js
import styled, { css } from "styled-components";
import { FaEye } from "react-icons/fa";

export const PageTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;  // adjust as needed
  margin: 0 0 0.5rem 0;
  color: #FFF;

  /* Fully responsive font-size using clamp */
  font-size: clamp(1.5rem, 2vw, 6rem);
`;

export const SubTitle = styled.p`
   font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 1.4; /* or 36px if you prefer fixed line-height */
  /* margin: 0; */
  color: #DAD7FF;

  /* Responsive font-size for all screens up to 8k */
  font-size: clamp(0.9rem, 1vw, 3rem);
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: separate; /* changed from collapse */
  border-spacing: 0 0.5rem; /* vertical gap between rows */
  /* background: #1a1a1a; */
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

  /* Round corners on the first and last header cell */
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
    padding: clamp(0.8rem, 0.8vw, 1.5rem); /* responsive padding */
  }
`;

export const TableCell = styled.td`
  padding: clamp(0.8rem, 1vw, 1.5rem); /* responsive padding */
  font-size: clamp(0.85rem, 1vw, 2rem); /* responsive font size */
  color: #ddd;
   font-family: "Roboto";
   text-align: center;
`;

export const StatusBadge = styled.span`
  display: inline-flex;              /* flex for alignment */
  align-items: center;               /* vertical center */
  justify-content: center;           /* horizontal center */
  min-width: clamp(60px, 8vw, 100px); /* responsive width */
  padding: clamp(0.2rem, 0.4vw, 0.5rem) clamp(0.5rem, 1vw, 1rem); /* responsive padding */
  border-radius: clamp(4px, 0.5vw, 8px); /* responsive radius */
  font-weight: 600;
  font-size: clamp(0.7rem, 0.9vw, 1.5rem); /* responsive font size */
  text-align: center;
   font-family: "Roboto";

  ${({ status }) =>
    status === "Pending" &&
    css`
      background: #F97316;
      color: white;
    `}

  ${({ status }) =>
    status === "Open" &&
    css`
      background: #22C55E;
      color: white;
    `}

  ${({ status }) =>
    status === "Closed" &&
    css`
      background: #E53935;
      color: white;
    `}
`;



export const Pagination = styled.div`
  position: fixed;          
  bottom: clamp(1rem, 1.5vw, 2rem);  /* responsive distance from bottom */
  left: clamp(1rem, 1.5vw, 2rem);    /* responsive distance from left */
  display: flex;
  align-items: center;
  gap: clamp(0.3rem, 0.8vw, 1rem);   /* responsive gap between buttons */
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
  font-size: clamp(1rem, 1vw, 2.5rem); /* responsive icon size */
  color: ${({ disabled }) => (disabled ? "#bbb" : "#fff")};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ disabled }) => (disabled ? "#bbb" : "#9d4edd")};
  }
`;

export const PageButton = styled.button`
  padding: clamp(0.4rem, 0.6vw, 0.8rem) clamp(0.6rem, 0.9vw, 1.2rem);
  border-radius: clamp(3px, 0.5vw, 6px);       /* responsive radius */
  border: none;
  cursor: pointer;
  font-size: clamp(0.8rem, 0.8vw, 1.5rem);       /* responsive font */
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