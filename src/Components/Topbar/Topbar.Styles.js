// src/components/Navbar.Styles.js
import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem clamp(1rem, 2vw, 3rem);
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.div`
  width: 35px;
  height: auto;
`;

export const BrandName = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const Hamburger = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: #9d4edd;
`;
