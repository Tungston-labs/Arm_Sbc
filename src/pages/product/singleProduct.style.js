import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 5rem;
  padding-bottom: 7rem;
  box-sizing: border-box;
  background: #0e0619;
  color: white;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 3rem;
    padding-bottom: 5rem;
  }
`;
export const DividerDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const HeaderImageContainer = styled.section`
  padding-block: 3rem;
  img {
    width: 70%;
    min-width: 600px;
    height: auto;
  }
  @media (max-width: 480px) {
    padding-block: 1rem;
    display: flex;
    justify-content: center;
    img {
      width: 70%;
      min-width: 250px;
      height: auto;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    img {
      width: 70%;
      min-width: 300px;
      height: auto;
    }
  }
`;
export const HeaderTextContainer = styled.section`
  padding-inline: 3rem;
  h2 {
    font-size: 1.75rem;
    padding-bottom: 2rem;
    font-weight: 600;
  }
  p,
  li {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1rem;
  }
  p:nth-of-type(2) {
    padding-bottom: 2rem;
  }
  ul {
    padding-bottom: 2rem;
    padding-left: 2.5rem;
  }
  @media (max-width: 480px) {
    padding-inline: 0rem;
    h2 {
      font-size: 1.12rem;
      padding-bottom: 0rem;
    }
    p,
    li {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
    ul {
      padding-bottom: 1rem;
      padding-left: 1.5rem;
    }
    p:nth-of-type(2) {
      padding-bottom: 0.5rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-inline: 1rem;
    h2 {
      font-size: 1.5rem;
      padding-bottom: 0.8rem;
      font-weight: 600;
    }
    p,
    li {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
    }
    p:nth-of-type(2) {
      padding-bottom: 1rem;
    }
    ul {
      padding-bottom: 1rem;
      padding-left: 1.5rem;
    }
  }
`;

export const ButtonSection = styled.div`
  display: ${(props) => props.display || "none"};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;
  @media (max-width: 480px) {
    display: ${(props) => (props.display === "flex" ? "none" : "flex")};
    padding-block: 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-block: 1rem;
  }
`;

export const CompareButton = styled.button`
  background: transparent;
  border: 1px solid #8a38f5;
  border-radius: 0.5rem;
  padding: 0.5rem 3rem;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;
export const AddToCartButton = styled.button`
  background: #facc15;
  border: 1px solid #facc15;
  border-radius: 0.5rem;
  padding: 0.7rem 1.2rem;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0.7rem 1.2rem;
    color: #000;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
`;

export const Link = styled.a`
  color: #06b6d4;
  text-decoration: underline;
  font-size: 1.5rem;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 0.8rem;
  }
`;

export const SpecificationContainer = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background: #0e0619;
  color: white;

  h2 {
    width: 100%;
    color: #8a38f5;
    text-align: center;
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    padding-block: 2rem;
    padding-inline: 5rem;
    h2 {
      font-size: 3.38rem;
      padding-bottom: 2rem;
    }
  }
  @media (min-width: 1850px) {
    padding-block: 4rem;
    padding-inline: 10rem;
    h2 {
      font-size: 4.38rem;
      padding-bottom: 4rem;
    }
  }
`;

export const SpecificationNav = styled.nav`
  padding-block: 1rem;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    font-size: 0.75rem;
  }
  @media (min-width: 1024px) {
    width: 50%;
    ul {
      font-size: 1rem;
    }
  }
  @media (min-width: 1850px) {
    width: 50%;
    ul {
      font-size: 1.5rem;
    }
  }
`;
export const NavItem = styled.li`
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;
    background: linear-gradient(90deg, #ffffff 20.67%, #47336d 69.71%);
    transition: width 0.3s ease;
  }

  ${(props) =>
    props.active &&
    `
      &::after {
        width: 100%;
      }
    `}

  @media (min-width: 1850px) {
    padding: 1rem 1.5rem;
  }
`;
