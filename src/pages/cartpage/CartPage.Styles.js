import styled from "styled-components";

export const CartContainer = styled.div`
  color: #fff;
  margin: auto;
min-height: 100vh;

  @media (max-width: 900px) {
     background: url('/images/cart/cardbackpic .png') no-repeat center center;
    background-size: cover;
      padding: 1rem;
  }

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2rem;
  }
`;
export const Container = styled.div`
 background: url('/images/cart/cardbackpic .png') no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 8rem;
  margin: auto;
  min-height: 100vh;

  @media (max-width: 900px) {
     background: url('/images/cart/cardbackpic .png') no-repeat center center;
    background-size: cover;
      padding: 1rem;
  }

  @media (min-width: 3840px) {
    padding: 6rem 12rem;
    font-size: 1.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2rem;
    padding: 8rem 16rem;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTitle = styled.h2`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  font-size: 1.5rem; 

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }

  @media (min-width: 1920px) {
    font-size: 3.5rem;
  }

  @media (min-width: 3840px) {
    font-size: 5rem;
  }

  @media (min-width: 7680px) {
    font-size: 6rem;
  }
`;

export const EnquiryButton = styled.button`
  background: #AD8FE5;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 0.95rem; 
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #8c52ff;
  }

 
  @media (min-width: 600px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 7px;
  }


  @media (min-width: 900px) {
    font-size: 1.1rem;
    padding: 0.7rem 1.4rem;
    border-radius: 8px;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    border-radius: 9px;
  }

  @media (min-width: 1920px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 10px;
  }


  @media (min-width: 3840px) {
    font-size: 1.5rem;
    padding: 1.2rem 2.5rem;
    border-radius: 12px;
  }


  @media (min-width: 7680px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
    border-radius: 15px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;

  @media (min-width: 769px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 0; 
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const ProductImage = styled.img`
  width: 120px;
  height: auto;

  @media (min-width: 3840px) {
    width: 240px;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductName = styled.h3`
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  
  @media (min-width: 600px) {
    font-size: 1rem; 
  }

  @media (min-width: 900px) {
    font-size: 1.2rem; 
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem; 
  }

  @media (min-width: 1920px) {
    font-size: 2rem; 
  }

  @media (min-width: 3840px) {
    font-size: 2.5rem; 
  }

  @media (min-width: 7680px) {
    font-size: 3rem;
  }
`;


export const ProductSpecs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem; 
  opacity: 0.8;

  margin-top: 10px;

  li {
    margin-bottom: 0.3rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    margin-top: 0; 
  }


  @media (min-width: 900px) {
    font-size: 1.1rem;
  }


  @media (min-width: 1200px) {
    font-size: 1.2rem; 
  }

  @media (min-width: 1920px) {
    font-size: 1.4rem; 
  }


  @media (min-width: 3840px) {
    font-size: 1.5rem; 
  }


  @media (min-width: 7680px) {
    font-size: 2rem; 
  }
`;



export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  background: none;      
  border: none;         
  color: inherit;       
  font-size: 1rem;      
  cursor: pointer;      
  min-width: 20px;
  text-align: center;
  padding: 0;           

  &:focus {
    outline: none;      
  }

  @media (min-width: 600px) {
    font-size: 1rem;

  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
   
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2.8rem;
  }
`;


export const QuantityValue = styled.span`
 background: #fff;
  border: 1px solid #fff;
  color: black;
  padding: 0.2rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #ff4d4d;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
  }
`;

export const MoreInfo = styled.a`
  font-size: 0.9rem;
  color: #8c52ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 1rem 0;
`;


