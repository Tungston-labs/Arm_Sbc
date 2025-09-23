import styled from "styled-components";

export const Container = styled.div`
  background-color: #0e0619;
  width: 100%;
  padding-bottom: 40px;
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding-left: 30px;
  padding-top: 20px;
  color: white;
  @media (min-width: 280px) and (max-width: 768px) {
    font-size: 14px;
    padding-left: 10px;
    padding-top: 2px;
  }
  @media (max-width: 1024px) {
    padding-left: 30px;
    padding-top: 20px;
    font-size: 24px;
  }
  @media (min-width: 2500px) and (max-width: 4200px) {
    padding-left: 30px;
    padding-top: 20px;
    min-width: 100px;
    font-size: 42px;
  }
`;
export const ScrollWrapper = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-auto-flow: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    grid-auto-columns: max-content;
    width: 100%;

    > div {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 200px;
    }
  }
`;

export const HeaderCard = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 30px;
  padding: ${({ small }) => (small ? "6px 8px" : "20px 12px")};

  @media (max-width: 768px) {
    margin: 0;
    padding: ${({ small }) => (small ? "6px 2px" : "4px 2px")};

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
  }
  @media (min-width: 2500px) and (max-width: 4200px) {
    padding: ${({ small }) => (small ? "16px 8px" : "100px 50px")};
    min-width: 100px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ small }) => (small ? "8px 6px" : "40px 12px")};
  color: white;
  position: relative;

  @media (max-width: 768px) {
    padding: ${({ small }) => (small ? "6px" : "8px")};
    min-width: 100px;
  }
  @media (max-width: 1024px) {
    padding: ${({ small }) => (small ? "6px" : "8px")};
    min-width: 200px;
  }
  @media (min-width: 2500px) and (max-width: 4200px) {
    padding: ${({ small }) => (small ? "16px" : "50px")};
    min-width: 100px;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: ${({ small }) => (small ? "4px" : "1px")};
    bottom: ${({ small }) => (small ? "4px" : "1px")};
    right: 0;
    width: 0.5px;
    background-color: white;
  }

  img {
    width: ${({ small }) => (small ? "100px" : "320px")};
    height: ${({ small }) => (small ? "60px" : "200px")};
    object-fit: contain;

    @media (max-width: 768px) {
      width: 120px;
      height: 100px;
      max-height: 160px;
    }
    @media (min-width: 2500px) and (max-width: 4200px) {
      width: 420px;
      height: 300px;
    }
  }
`;

export const BoxText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: ${({ small }) => (small ? "12px" : "19px")};
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: ${({ small }) => (small ? "10px" : "12px")};
  }
     @media (min-width: 2500px) and (max-width: 4200px) {
         font-size: ${({ small }) => (small ? "32px" : "32px")};

    }
  
`;

export const ReadMoreButton = styled.button`
  border-radius: 2px;
  background-color: #8a38f5;
  color: white;
  border: 1px solid #8a38f5;
  font-size: ${({ small }) => (small ? "10px" : "19px")};
  margin-top: 6px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
    @media (min-width: 2500px) and (max-width: 4200px) {
         font-size: 32px

    }
  &:hover {
    text-decoration: underline;
  }
`;
export const RemoveButton = styled.button`
  position: absolute;
  top: 6px;
  right: 60px;
  background: transparent;
  border: none;
  color: white;
  font-size: 42px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    top: 6px;
    right: 30px;
  }
  @media (max-width: 1024px) {
    font-size: 36px;
    top: 6px;
    right: 25px;
  }
`;
