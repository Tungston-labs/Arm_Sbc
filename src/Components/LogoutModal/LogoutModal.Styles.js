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
  z-index: 3000;
`;

export const ModalContent = styled.div`
  background: #1e1e1e;
  padding: 24px;
  border-radius: 12px;
  width: 350px;
  max-width: 95%;
  text-align: center;
  color: #fff;
  font-family: "Satoshi", sans-serif;

  @media (min-width: 1440px) {
    width: 420px;
    padding: 32px;
    border-radius: 14px;
  }

  @media (min-width: 2560px) {
    width: 520px;
    padding: 40px;
    border-radius: 16px;
  }

  @media (min-width: 3840px) {
    width: 740px;
    padding: 48px;
    border-radius: 20px;
  }

  @media (min-width: 5120px) {
    width: 720px;
    padding: 56px;
    border-radius: 24px;
  }

  @media (min-width: 7680px) {
    width: 900px;
    padding: 72px;
    border-radius: 28px;
  }
`;

export const ModalImage = styled.div`
  margin-bottom: 16px;

  img {
    width: 100px;
    height: auto;
  }

  @media (min-width: 1440px) {
    img {
      width: 120px;
    }
  }
  @media (min-width: 2560px) {
    img {
      width: 250px;
    }
  }
  @media (min-width: 3840px) {
    img {
      width: 380px;
    }
  }
  @media (min-width: 5120px) {
    img {
      width: 220px;
    }
  }
  @media (min-width: 7680px) {
    img {
      width: 280px;
    }
  }
`;

export const ModalMessage = styled.p`
  font-size: 1rem;
  margin: 12px 0 24px;
  color: #eaeaea;

  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 3840px) {
    font-size: 3rem;
  }
  @media (min-width: 5120px) {
    font-size: 3rem;
  }
  @media (min-width: 7680px) {
    font-size: 4rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media (min-width: 2560px) {
    gap: 20px;
  }
  @media (min-width: 3840px) {
    gap: 28px;
  }
  @media (min-width: 5120px) {
    gap: 36px;
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background: #8A38F5;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: #6a3fe5;
  }

  @media (min-width: 1440px) {
    padding: 14px;
    font-size: 16px;
    border-radius: 8px;
  }
  @media (min-width: 2560px) {
    padding: 1.8rem;
    font-size: 2rem;
    border-radius: 10px;
  }
  @media (min-width: 3840px) {
    padding: 2rem;
    font-size: 2.5rem;
    border-radius: 12px;
  }
  @media (min-width: 5120px) {
    padding: 26px;
    font-size: 32px;
    border-radius: 14px;
  }
  @media (min-width: 7680px) {
    padding: 32px;
    font-size: 40px;
    border-radius: 16px;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background: #fff;
  color: #000;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: #f1f1f1;
  }

  @media (min-width: 1440px) {
    padding: 14px;
    font-size: 16px;
    border-radius: 8px;
  }
  @media (min-width: 2560px) {
    padding: 1.8rem;
    font-size: 2rem;
    border-radius: 10px;
  }
  @media (min-width: 3840px) {
    padding: 2rem;
    font-size: 2.5rem;
    border-radius: 12px;
  }
  @media (min-width: 5120px) {
    padding: 26px;
    font-size: 32px;
    border-radius: 14px;
  }
  @media (min-width: 7680px) {
    padding: 32px;
    font-size: 40px;
    border-radius: 16px;
  }
`;
