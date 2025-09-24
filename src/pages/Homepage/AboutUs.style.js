// AboutUs.style.js
import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  background-color: #4F4957; 
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ImageWrapper = styled.div`
  flex: 1 1 10%;
  max-width: 40%;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    flex: 1 1 100%;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  flex: 1 1 50%;
  max-width: 50%;
  margin-right: 90px;

  @media (max-width: 768px) {
    max-width: 100%;
    flex: 1 1 100%;
    margin-right: 0;
    text-align: center;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 550;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #FFFFFF;
  text-align: justify;

  @media (max-width: 1024px) {
    padding: 0 40px;   /* tablets */
  }

  @media (max-width: 768px) {
    padding: 0 30px;   /* mobile landscape */
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0 20px;   /* small mobiles */
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
    padding: 0 15px;   /* very small screens */
  }
`;

