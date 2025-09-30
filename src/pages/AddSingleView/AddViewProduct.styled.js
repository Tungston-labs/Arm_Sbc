import styled from "styled-components";

export const AddContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba(114, 62, 218, 1) 0%,
    rgba(17, 3, 36, 1) 10%,
    rgba(3, 2, 6, 1) 30%,
    rgba(3, 2, 6, 1) 100%
  );
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 64px;
`;
export const Header = styled.h1`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 28px; 

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
  }

  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 3rem;
  }
`;


export const SubText = styled.p`
  color: #fff;
  margin-top: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 20px; 

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }

  /* 8K displays */
  @media (min-width: 7680px) {
    font-size: 3rem;
  }
`;

export const ActionBar = styled.div`
  margin-left: auto;
  display: flex;
  gap: 12px;
`;

export const EditButton = styled.button`
  background: #8a38f5;
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;

  /* Base (mobile) */
  font-size: 0.9rem;
  padding: 0 32px;
  height: 36px;

  /* Tablets / small desktops */
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0 40px;
    height: 40px;
  }

  /* Full HD / large desktops */
  @media (min-width: 1920px) {
    font-size: 1.1rem;
    padding: 0 50px;
    height: 44px;
  }

  /* 4K */
  @media (min-width: 3840px) {
    font-size: 1.25rem;
    padding: 0 60px;
    height: 52px;
  }

  /* 8K */
  @media (min-width: 7680px) {
    font-size: 1.4rem;
    padding: 0 80px;
    height: 60px;
  }

  &:hover {
    background: #752ee0;
    transform: translateY(-1px);
  }
`;

export const DeleteButton = styled.button`
  background: #dd231f;
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;

  font-size: 0.9rem;
  padding: 0 32px;
  height: 36px;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0 40px;
    height: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 1.1rem;
    padding: 0 50px;
    height: 44px;
  }

  @media (min-width: 3840px) {
    font-size: 1.25rem;
    padding: 0 60px;
    height: 52px;
  }

  @media (min-width: 7680px) {
    font-size: 1.4rem;
    padding: 0 80px;
    height: 60px;
  }

  &:hover {
    background: #c71a22;
    transform: translateY(-1px);
  }
`;


export const ImageRow = styled.div`
  display: flex;
  align-items: flex-start;   
  gap: 40px;
  margin-top: 40px;
  flex-wrap: nowrap;       
`;

export const ImageWrapper = styled.div`
  flex: 0 0 auto;
  background: #2b2534;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 320px;

  @media (min-width: 1440px) {
    max-width: 380px;
  }
  @media (min-width: 1920px) {
    max-width: 340px;
  }
  @media (min-width: 2560px) {
    max-width: 440px;
  }
  @media (min-width: 3840px) { 
    max-width: 500px;
  }
  @media (min-width: 5120px) {
    max-width: 600px;
  }
 
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;          
  object-fit: contain;
  background-color: #363042;

  @media (min-width: 2560px) { 
    max-height: 700px;
  }
  @media (min-width: 3840px) { 
    max-height: 900px;
  }
  @media (min-width: 7680px) { 
    max-height: 1400px;
  }
   @media (min-width: 1920px) { 
    max-height: 1400px;
  }
`

export const NavbarContainer=styled.div`
display: flex;
justify-content: center;

`

export const FormBlock = styled.div`
  flex: 1;                  
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
`;





export const HeadingBox = styled.h2`
  color: #fff;
  width: 230px;
  margin-bottom: 20px;
  border-bottom: 1px solid #fff;
  padding-bottom: 4px;
  font-weight: 500;
  font-size: 20px;  

  /* Tablet / small desktop */
  @media (min-width: 768px) {
    font-size: 22px;
  }

  /* Full HD / 2K */
  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  /* WQHD / 2.5K */
  @media (min-width: 2560px) {
    font-size: 2rem;
  }

  /* 4K */
  @media (min-width: 3840px) {
    font-size: 3rem;
    width:300px;
  }

  /* 8K */
  @media (min-width: 7680px) {
    font-size: 36px;
  }
`;




export const FormArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1920px) {
    gap: 24px;
  }
  @media (min-width: 2560px) {
    gap: 32px;
  }
  @media (min-width: 3840px) {   /* 4K */
    gap: 40px;
  }
  @media (min-width: 7680px) {   /* 8K */
    gap: 56px;
  }
`;

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  gap: 10px;

  @media (min-width: 1920px) {
    gap: 20px;
  }
  @media (min-width: 2560px) {
    gap: 30px;
  }
  @media (min-width: 3840px) {
    gap: 40px;
  }

`;

export const FullWidth = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 15px 14px;
  background: #2b2534;
  color: #fff;
  border: none;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    padding: 18px 16px;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
    padding: 20px 18px;
  }
  @media (min-width: 3840px) {   /* 4K */
    font-size: 2.5rem;
    padding: 24px 20px;
  }

`;

export const TextArea = styled.textarea`
  padding: 20px 14px;
  background: #2b2534;
  color: #fff;
  border: none;
  border-radius: 6px;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: 16px;

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    padding: 22px 16px;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
    padding: 24px 18px;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
    padding: 28px 20px;
  }
 
`;

export const DescriptionSection = styled.div`
  width: 100%;
  color: white;
  background: ${(props) => (props.background ? props.background : "none")};
  border-radius: 0.25rem;
  padding-inline: 1rem;
  @media (width >= 1024px) {
    display: ${(props) => props.display || "flex"};
    flex-wrap: wrap;
    background: ${(props) =>
      props.background ? props.background : "#ffffff1a"};
    border-radius: 0.63rem;
    padding: 1.6rem 2.1rem;
  }
  @media (width >= 1280px) {
    padding: 2rem 2.6rem;
  }
  @media (width >= 1536px) {
    padding: 2.6rem 3.1rem;
  }
  @media (width >= 2560px) {
    padding: 3rem 3.6rem;
    border-radius: 1rem;
    margin-top: 1rem;
  }
  @media (width >= 3840px) {
    padding: 4rem 5.6rem;
    border-radius: 1.5rem;
    margin-top: 2rem;
  }
`;