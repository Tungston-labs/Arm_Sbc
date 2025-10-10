import styled from "styled-components";

export const CartContainer = styled.div`
  color: #fff;
  margin: auto;
min-height: 100vh;

  @media (max-width: 900px) {
background: linear-gradient(155deg, rgb(57, 24, 100) 0%, rgb(10, 6, 15) 17%);
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
background: linear-gradient(155deg, rgb(57, 24, 100) 0%, rgb(10, 6, 15) 17%);
  background-size: cover;
  color: #fff;
padding: 3rem 10rem 2rem 10rem;

  margin: auto;
  min-height: 100vh;
  

  @media (max-width: 900px) {
  background: none;
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
  font-family: 'Montserrat';
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
 @media (min-width: 1440px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

  @media (min-width: 3840px) {
    font-size: 3rem;
  }

`;

export const EnquiryButton = styled.button`
  background: rgba(173, 143, 229, 1);
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
    font-size: 1rem;
    padding: 0.6rem 2rem;
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
    gap: 20px; 
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
  margin-bottom: 1rem;
  @media (min-width: 600px) {
    font-size: 1rem; 
  }

  @media (min-width: 900px) {
    font-size: 1.2rem; 
  }

  @media (min-width: 1200px) {
    font-size: 1rem; 
  }
 @media (min-width: 1440px) {
    font-size: 1.3rem; 
  }
  @media (min-width: 1920px) {
    font-size: 1.8rem; 
  }

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

  /* margin-top: 10px; */

  li {
    margin-bottom: 0.3rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    margin-top: 0; 
  }


@media (min-width: 900px) {
    font-size: 1.2rem; 
  }

  @media (min-width: 1200px) {
    font-size: 1rem; 
  }
 @media (min-width: 1440px) {
    font-size: 1.2rem; 
  }
  @media (min-width: 1920px) {
    font-size: 1.5rem; 
  }
@media (min-width: 2560px) {
    font-size: 1.5rem; 
  }

  @media (min-width: 3840px) {
    font-size: 2rem; 
  }

`;



export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
    font-size:1.2rem;
      @media (min-width: 900px) {
    font-size: 1.5rem;
   
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
@media (min-width: 1440px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }
  @media (min-width: 2048px) {
    font-size: 2rem;
  }
   @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.2rem;
  }

  @media (min-width: 7680px) {
    font-size: 2.8rem;
  }
`;

export const QuantityButton = styled.button`
  background: none;      
  border: none;         
  color: #898595;       
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
    font-size: 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }
  @media (min-width: 2048px) {
    font-size: 2rem;
  }
     @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2.8rem;
  }
`;


export const QuantityValue = styled.span`
  background: #CAC4C4;
  border: 1px solid #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;       
  height: 2rem;
  font-size: 1rem;
  padding: 0;         
  border-radius: 4px;
  cursor: pointer;

  /* Small screens */
  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
  }

  /* Medium screens */
  @media (min-width: 900px) {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }

  /* Large screens */
  @media (min-width: 1200px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.3rem;
  }

  /* Extra large screens */
  @media (min-width: 1920px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.3rem;
  }
 @media (min-width: 2048px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  /* 4K screens */
  @media (min-width: 3840px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.8rem;
  }

  /* 8K screens */
  @media (min-width: 7680px) {
    width: 6rem;
    height: 6rem;
    font-size: 2.8rem;
  }
`;


export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
margin-right:10px ;
  &:hover {
    color: #ff4d4d;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
  }
`;

export const MoreInfo = styled.a`
  font-size: 0.8rem;
  color: #4C67FF;
  text-decoration: underline;
  margin-left: 2rem;

  &:hover {
    text-decoration: underline;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin-left: 1px;
  }

  /* Medium screens */
  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }
`;


export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgb(134, 134, 134);
  margin: 1rem 0;
  margin-bottom: 2rem;
`;


