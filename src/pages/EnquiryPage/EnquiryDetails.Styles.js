// src/pages/Enquiry/EnquiryDetails.Styles.js
import styled from "styled-components";

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #9d4edd;
  font-size: clamp(1rem, 1.5vw, 2rem); /* responsive size */
  cursor: pointer;
  display: flex;
  align-items: center; /* center icon vertically */
  justify-content: center;
  padding: 0;
`;

export const PageTitle = styled.h1`
  font-size: clamp(1.2rem, 2vw, 3rem); /* responsive font size */
  font-weight: 700;
  margin: 0;             /* remove default margin */
  line-height: 1;        /* align with button vertically */
`;
export const SubTitle = styled.p`
  font-size: 0.95rem;
  color: #cfcfcf;
  margin-bottom: 1.5rem;
`;

export const StatusSelect = styled.select`
  background: #1e1e24;
  border: 1px solid #333;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: #fff;
  font-size: 0.9rem;
  float: right;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #9d4edd;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
`;

export const CustomerDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 1rem; */
  background: linear-gradient(90deg, #2b1a42, #0d0d0d);
  padding: 1rem;
  border-radius: 10px;
`;

export const DetailItem = styled.p`
  font-size: 0.9rem;
  color: #ddd;
  strong {
    display: block;
    color: #9d4edd;
    margin-bottom: 0.2rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const ProductCard = styled.div`
  background: #1e1e24;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;
export const HeaderRow = styled.div`
  display: flex;
  align-items: center; /* vertically center icon and title */
  gap: 0.8rem;         /* space between back button and title */
  margin-bottom: 1rem;
`;