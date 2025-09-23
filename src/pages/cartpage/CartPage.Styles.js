import styled from "styled-components";

export const CartContainer = styled.div`
  /* Default background image */
  background: url('/images/cart/cardbackpic .png') no-repeat center center;
  background-size: cover; /* ensures image covers the container */
  color: #fff;
  padding: 8rem;
  margin: auto;

  /* Mobile background image */
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
  /* margin-bottom: 2rem; */
`;

export const CartTitle = styled.h2`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  font-size: 1.5rem; /* default mobile font */

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
  font-size: 0.95rem; /* default mobile font */
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #8c52ff;
  }

  /* Tablets / Small screens */
  @media (min-width: 600px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 7px;
  }

  /* Desktop screens */
  @media (min-width: 900px) {
    font-size: 1.1rem;
    padding: 0.7rem 1.4rem;
    border-radius: 8px;
  }

  /* Large desktop / 1200px+ */
  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    border-radius: 9px;
  }

  /* Full HD / 1920px+ */
  @media (min-width: 1920px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 10px;
  }

  /* 4K screens */
  @media (min-width: 3840px) {
    font-size: 1.5rem;
    padding: 1.2rem 2.5rem;
    border-radius: 12px;
  }

  /* 8K screens */
  @media (min-width: 7680px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
    border-radius: 15px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center; /* Center image vertically relative to details */
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;

  @media (max-width: 768px) {
    /* flex-direction: column; */
    /* align-items: center; */
    /* text-align: center; */
  }
`;


export const ProductImage = styled.img`
  width: 120px;
  height: auto;
  border-radius: 8px;

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
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 25px; /* 125% */
  @media (min-width: 3840px) {
    font-size: 2rem;
  }
`;

export const ProductSpecs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;

  li {
    margin-bottom: 0.3rem;
  }

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  font-size: 1rem;
  min-width: 20px;
  text-align: center;


  @media (min-width: 3840px) {
    padding: 0.6rem 1.2rem;
    font-size: 1.5rem;
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


