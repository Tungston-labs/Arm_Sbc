
import styled from "styled-components";

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #9d4edd;
  font-size: clamp(1rem, 1.5vw, 2rem); 
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 0.25rem;

  &:hover {
    color: #b366ff;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }


  @media (min-width: 768px) {
    padding: 0.5rem;
  }


  @media (min-width: 1024px) {
    padding: 0.75rem;
  }

  @media (min-width: 2560px) {
    padding: 1rem;
    font-size: 2.5rem;
  }
    @media (min-width: 3860px) {
    padding: 1.5rem;
    font-size: 4.5rem;
  }


  @media (min-width: 7680px) {
    padding: 1.5rem;
    font-size: 3rem;
  }
`;


export const PageTitle = styled.h1`
  font-family: 'Roboto';
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



export const SubHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap; 
`;

export const StatusSelect = styled.select`
  background: ${(props) => props.bgColor || "#1e1e24"};
  border: 1px solid #333;
  padding: 0.5rem 2.5rem 0.5rem 1rem; /* extra right padding for arrow */
  border-radius: 6px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  appearance: none;
  cursor: pointer;

  /* Custom white arrow */
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;

  option {
    background: #1e1e24;
    color: #fff;
  }

  &:focus {
    outline: none;
    border-color: #9d4edd;
    box-shadow: 0 0 4px rgba(157, 78, 221, 0.5);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 2.8rem 0.6rem 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.7rem 3rem 0.7rem 1.3rem;
  }
`;



export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1rem; 
  font-weight: 600;
  color: #9140FB;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

 
  @media (min-width: 2560px) {
    font-size: 3rem;
  }
 @media (min-width: 3860px) {
    font-size: 5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2.5rem;
  }
`;


export const CustomerDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  background: linear-gradient(90deg,rgb(13, 13, 14),rgb(58, 20, 88));
  padding: 1rem;
  border-radius: 10px;
 

 
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  
  }


  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem;
  
  }


  @media (min-width: 2560px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
   
  }


  @media (min-width: 7680px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem;
  
  }
`;

export const DetailItem = styled.p`
  font-size: 0.8rem;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  strong {
    display: block;
    color: #9d4edd;
    margin-bottom: 0.2rem;
      font-family: 'Roboto', sans-serif;
  }

  
  @media (min-width: 768px) {
    font-size: 1rem;
  }


  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }


  @media (min-width: 2560px) {
    font-size: 2rem;
  }

   @media (min-width: 3860px) {
    font-size: 3rem;
  }

  @media (min-width: 7680px) {
    font-size: 1.8rem;
  }
`;


export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;


  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

 
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }


  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }


  @media (min-width: 7680px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }
`;

export const ProductCard = styled.div`
  background: #1e1e24;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  font-family: 'Roboto', sans-serif;
  &:hover {
    transform: translateY(-5px);
  }

 
  @media (min-width: 1024px) {
    padding: 1.5rem;
  }

  @media (min-width: 2560px) {
    padding: 2rem;
  }
  @media (min-width: 3860px) {
    padding: 4rem;
  }
  @media (min-width: 7680px) {
    padding: 3rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    height: 150px;
  }

  @media (min-width: 2560px) {
    height: 300px;
  }

  @media (min-width: 3860px) {
    height: 500px;
  }

  @media (min-width: 7680px) {
    height: 700px;
  }
`;

export const ProductName = styled.p`
  font-size: 0.9rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
 @media (min-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }

  @media (min-width: 3860px) {
    font-size: 2rem;
  }
  @media (min-width: 7680px) {
    font-size:3rem;
  }
`;



export const HeaderRow = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.2rem;     
  
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