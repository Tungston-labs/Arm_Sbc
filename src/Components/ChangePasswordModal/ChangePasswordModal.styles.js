import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 3000;
`;

export const ModalContent = styled.div`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 12px;
  width: 400px;
  max-width: 95%;
  color: #fff;
  font-family: "Satoshi", sans-serif;
  z-index: 3100;


  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
  }


  @media (min-width: 481px) and (max-width: 768px) {
    width: 50%;
    padding: 1.25rem;
  }


  @media (min-width: 769px) and (max-width: 1440px) {

    padding: 1.5rem;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    width: 30%;
    padding: 2rem;
  }

  @media (min-width: 1921px) and (max-width: 2560px) {
    width: 30%;
    padding: 2.5rem;
    border-radius: 16px;
  }

  @media (min-width: 2561px) and (max-width: 3840px) {
    width: 30%;
    padding: 4rem;
    border-radius: 18px;
  }

  @media (min-width: 3841px) {
    width: 40%;
    padding: 3.5rem;
    border-radius: 20px;
    max-width: 900px; 
  }
`;


export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderIcon = styled.div`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 34px;
    height: 34px;

    @media (max-width: 480px) {
      width: 28px;
      height: 28px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
    @media (min-width: 769px) and (max-width: 1440px) {
      width: 36px;
      height: 36px;
    }
    @media (min-width: 1441px) and (max-width: 1920px) {
      width: 40px;
      height: 40px;
    }
    @media (min-width: 1921px) and (max-width: 2560px) {
      width: 48px;
      height: 48px;
    }
    @media (min-width: 2561px) and (max-width: 3840px) {
      width: 94px;
      height: 94px;
    }
    @media (min-width: 3841px) {
      width: 80px;
      height: 80px;
    }
  }
`;


export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
font-family: "Roboto";
  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 1921px) {
    font-size: 1.8rem;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 3rem;
  }
`;

export const ModalSubtitle = styled.p`
  font-size: 13px;
  color: #aaa;
  margin: 5px 0 0 0;
font-family: "Roboto";
  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (min-width: 1921px) {
    font-size: 1.2rem;
  }

  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 1921px) {
    font-size: 1.5rem;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 3rem;
  }
`;

export const InputField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #2b2b2b;
  border-radius: 6px;
  padding: 8px 10px;

  @media (max-width: 480px) {
    padding: 6px 8px;
  }

  @media (min-width: 1921px) {
    padding: 12px 14px;
  }
   @media (min-width: 2560px) {
      padding: 12px 14px;
  }
  @media (min-width: 3840px) {
       padding: 20px 14px;
  }
`;

export const PasswordInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #777;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 1921px) {
    font-size: 1.5rem;
  }
   @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }
`;

export const EyeIcon = styled.span`
  cursor: pointer;
  color: #aaa;
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 1921px) {
    font-size: 2rem;
  }
   @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 3rem;
  }
`;

export const ClearText = styled.span`
  font-size: 12px;
  color: #aaa;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1921px) {
    font-size: 1.5rem;
  }
   @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DiscardButton = styled.button`
  flex: 1;
  background: #fff;
  color: #000;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (min-width: 1921px) {
    padding: 14px;
    font-size: 16px;
  }
   @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
  }
`;

export const ApplyButton = styled.button`
  flex: 1;
  background: #8A38F5;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #6a3fe5;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (min-width: 1921px) {
    padding: 14px;
    font-size: 16px;
  }
   @media (min-width: 2560px) {
    font-size: 2rem;
      padding: 16px;
  }
  @media (min-width: 3840px) {
    font-size: 2.5rem;
      padding: 20px;
  }
`;
