
import styled from "styled-components";


export const PageWrapper = styled.div`
background: linear-gradient(155deg, rgb(57, 24, 100) 0%, rgb(10, 6, 15) 17%);
  min-height: 100vh;
  color: #fff;
  font-family: "Satoshi", sans-serif;
  padding: clamp(1rem, 2vw, 3rem);
  background-size: cover;
  

  @media (max-width: 768px) {
    background: none;
  }
`;

export const MobileSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  margin: 1rem 0;
  outline: none;
  font-family: "Roboto", sans-serif;

  option {
    background: #1a1a1a;
    color: #fff;
  }

  @media (min-width: 769px) {
    display: none; 
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(1rem, 2vw, 3rem);
  align-items: flex-start; 

  min-height: 100vh;
  color: #fff;
  font-family: "Satoshi", sans-serif;
  padding: clamp(1rem, 2vw, 3rem);
  background-size: cover;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;   
  }
`;


export const Main = styled.div`
  color: #fff;
  margin: auto;

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

export const ProductList = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
  }

 
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 2rem;
  }

  @media (min-width: 1025px) and (max-width: 1920px) {
    padding: 2px;
  }

  @media (min-width: 2560px) {
    padding: 2px;
  }


  @media (min-width: 3840px) {
    padding: 1rem;
  }

  @media (min-width: 7680px) {
    padding: 1rem;
  }
`;



export const ProductCard = styled.div`
  padding: 2px;
  color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;


export const ProductTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
 font-family: "Roboto";
  font-size: 2rem; 

   @media (max-width: 3864px) {
    font-size: 2.8rem;
  }
  @media (max-width: 2564px) {
    font-size: 2rem;
  }
 @media (max-width: 1980px) {
    font-size: 1.5rem;
  }
 @media (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ProductSpecs = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1rem;
  list-style: disc;
  color: white;
 font-family: "Roboto";
  font-size: 2.5rem; 
@media (max-width: 3860px) {
    font-size: 2rem;
  }

@media (max-width: 2560px) {
    font-size: 1.8rem;
  }

    @media (max-width: 1986px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const QuantityInput = styled.input`
  width: 60px;
  margin-left: 0.5rem;
  background: transparent;
  color: #fff;
  border: none;
font-size: 1rem;
`;
export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
     font-family: "Roboto";
    background: transparent;
    border: none;
    color: #4C67FF;
    cursor: pointer;
    font-size: clamp(0.8rem, 0.9vw, 1rem);
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid rgba(76, 103, 255, 0.4);
  }

  a {
     font-family: "Roboto";
    color: #4C67FF;
    text-decoration: none;
    font-size: clamp(0.8rem, 0.9vw, 1rem);

    &:hover {
      text-decoration: underline;
    }
  }


  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    button {
      border-right: none;
      padding-right: 0;
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    gap: 0.8rem;

    button {
      font-size: clamp(0.75rem, 1vw, 0.9rem);
    }

    a {
      font-size: clamp(0.75rem, 1vw, 0.9rem);
    }
  }
  @media (min-width: 1964px) {
    gap: 1.5rem;

    button, a {
      font-size: 2rem;
    }
  }
  

  @media (min-width: 2560px) {
    gap: 1.5rem;

    button, a {
      font-size: 2rem;
    }
  }

   @media (min-width: 3864px) {
    gap: 1.5rem;

    button, a {
      font-size: 2.5rem;
    }
  }
`;


export const FormSection = styled.div`
  padding: clamp(0.2rem, 1vw, 2rem);

`;



export const FormTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
font-family: "Montserrat";

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
 @media (max-width: 1440px) {
    font-size: 1.5rem;
  }

@media (max-width: 1980px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }
  @media (min-width: 2560px) {
    font-size: 2.8rem;
  }

  @media (min-width: 3840px) {
    font-size: 3rem;
  }

  @media (min-width: 7680px) {
    font-size: 4rem;
  }
`;


export const FormDescription = styled.p`
  color: white;
  margin-bottom: 2rem;
  line-height: 1.7;
  font-family: "Roboto";

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

 
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    line-height: 1.6;
   text-align: center;
  }


  @media (min-width: 2560px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
    line-height: 2.2rem;
  }

  @media (min-width: 7680px) {
    font-size: 2.2rem;
    line-height: 2.4rem;
  }
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.2vw, 1.5rem);

  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(0.5rem, 1vw, 1rem);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
  grid-template-columns: 130px 1fr;
  }

  
  @media (min-width: 2560px) {
    grid-template-columns: 200px 1fr; 
    gap: 1.5rem;
  }

  @media (min-width: 3840px) {
    grid-template-columns: 250px 1fr;
    gap: 4rem;
  }

  @media (min-width: 7680px) {
    grid-template-columns: 300px 1fr;
    gap: 3rem;
  }
`;

export const Label = styled.label`
  font-size: clamp(0.9rem, 1vw, 1rem);
   color: white;
  font-weight: 500;
  white-space: nowrap;
  font-family: "Roboto";

  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
  }

  @media (min-width: 7680px) {
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: clamp(0.6rem, 1vw, 0.8rem);
  border-radius: 8px;
  border: none;
  /* border: 1px solid rgba(255, 255, 255, 0.2); */
  outline: none;
  font-size: clamp(0.8rem, 1vw, 1.1rem);
  background:#2B2534;
  color: #fff;
  font-family: "Roboto";

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 1px solid #6e8bff;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (min-width: 2560px) {
    font-size: 1.5rem;
    padding: 1.2rem;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
    padding: 2rem;
  
  }

  @media (min-width: 7680px) {
    font-size: 2.5rem;
    padding: 2.5rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: clamp(0.6rem, 1vw, 0.8rem);
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: clamp(0.9rem, 1vw, 1.2rem);
  background:#2B2534;
  color: #fff;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 1px solid #6e8bff;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (min-width: 2560px) {
    font-size: 1.5rem;
    padding: 1rem;
    min-height: 160px;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
    padding: 1.2rem;
    min-height: 200px;
  }

  @media (min-width: 7680px) {
    font-size: 1.8rem;
    padding: 1.5rem;
    min-height: 280px;
  }
`;


export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 7px;
  background: #8A38F5;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  margin-top: 1rem;
  transition: all 0.3s ease;

  padding: 0.8rem;
  font-size: 1rem;

  &:hover {
    opacity: 0.95;
    transform: scale(1.01);
  }


  @media (min-width: 768px) {
    padding: 0.9rem;
    font-size: 1.1rem;
  }


  @media (min-width: 1024px) {
    padding: 1rem;
    font-size: 1.2rem;
  }

 
  @media (min-width: 1440px) {
    padding: 1.1rem;
    font-size: 1.3rem;
  }


  @media (min-width: 2560px) {
    padding: 1.2rem;
    font-size: 1.4rem;
  }


  @media (min-width: 3840px) {
    padding: 1.4rem;
    font-size: 1.6rem;
  }


  @media (min-width: 7680px) {
    padding: 1.8rem;
    font-size: 2rem;
  }
`;


export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 5rem;


@media (max-width: 768px) {
  gap: 1rem;
}


@media (min-width: 769px) and (max-width: 1440px) {
  gap: 1rem;
}


@media (min-width: 1441px) and (max-width: 2560px) {
  gap: 2rem;
}


@media (min-width: 2561px) and (max-width: 3840px) {
  gap: 2rem;
}

`;


export const Heading = styled.div`
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  font-size: 16px;
  
  @media (min-width: 600px) {
    font-size: 1.2rem;
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

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }

  @media (min-width: 3860px) {
    font-size: 2.8rem;
  }
`;
export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  margin: 1rem 0;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const MobileOnly = styled.div`
  display: block;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopOnly = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;
export const EmptyCartWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;

  img {
    max-width: 180px;
    opacity: 0.85;
  }

  p {
    margin-top: 1rem;
    color: #ccc;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    img {
      max-width: 220px;
    }
    p {
      font-size: 1rem;
    }
  }


  @media (min-width: 1024px) {
    img {
      max-width: 400px;
    }
    p {
      font-size: 1.1rem;
    }
  }

 
  @media (min-width: 1440px) {
    img {
      max-width: 460px;
    }
    p {
      font-size: 1.2rem;
    }
  }


  @media (min-width: 2560px) {
    img {
      max-width: 700px;
    }
    p {
      font-size: 1.4rem;
    }
  }

 
  @media (min-width: 3840px) {
    img {
      max-width: 800px;
    }
    p {
      font-size: 1.6rem;
    }
  }


  @media (min-width: 7680px) {
    img {
      max-width: 800px;
    }
    p {
      font-size: 2rem;
    }
  }
`;
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 1rem 0;
`;