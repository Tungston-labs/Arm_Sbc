// src/components/Navbar.styles.js
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background: #2b2534;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 3840px; /* ✅ up to 4K/8K screens */
  margin: 0 auto;
  padding: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.4rem, 1vw, 1rem);
  font-weight: 700;
  font-size: clamp(0.9rem, 1.5vw, 2rem);

  img,
  svg {
    width: clamp(22px, 3vw, 55px);
    height: auto;
    max-height: 60px;
  }

  span {
    white-space: nowrap;
    font-size: clamp(0.9rem, 2vw, 2rem);
  }

  /* ✅ Extra small mobile (320px–480px) */
  @media (max-width: 480px) {
    font-size: 0.9rem;

    img,
    svg {
      width: 3rem;
    }
  }

  /* ✅ Tablets (481px–1024px) */
  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.2rem;

    img,
    svg {
      width: 4rem;
    }
  }

  /* ✅ Small desktops / laptops (1025px–1440px) */
  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 1.5rem;

    img,
    svg {
      width: 5rem;
    }
  }

  /* ✅ Full HD (1920px) */
  @media (min-width: 1441px) and (max-width: 2560px) {
    font-size: 1.8rem;

    img,
    svg {
      width: 7rem;
    }
  }

  /* ✅ 4K UHD (3840px) */
  @media (min-width: 2561px) and (max-width: 4096px) {
    font-size: 2.2rem;

    img,
    svg {
      width: 10rem;
    }
  }

  /* ✅ 8K UHD (7680px) */
  @media (min-width: 4097px) {
    font-size: 3rem;

    img,
    svg {
      width: 90px;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: clamp(1rem, 2vw, 2.5rem);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  text-decoration: none;
  color: #ddd;
  font-size: clamp(0.9rem, 1vw, 1.2rem);
  transition: color 0.2s ease;

  &:hover {
    color: #9a6bff;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 1.5vw, 2rem);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchBox = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: clamp(0.8rem, 0.9vw, 1rem);
`;

export const CartIcon = styled.div`
  font-size: clamp(1rem, 1.5vw, 1.6rem);
  cursor: pointer;
`;

export const InquiryButton = styled.button`
  padding: 0.5rem 1rem;
  background: #9a6bff;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7f4ce0;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #3E3A45;
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 0 0 8px 8px;
`;

export const MobileNavItem = styled.a`
  text-decoration: none;
  color: #ddd;
  padding: 0.8rem 0;
border-bottom: 0.2px solid #FFF;
  font-size: 1rem;
  text-align: left;

  &:first-child {
    color: #9a6bff; /* Active/Home */
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: #9a6bff;
  }
`;

export const MobileInquiryButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.8rem;
  background: #9a6bff;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #7f4ce0;
  }
`;
