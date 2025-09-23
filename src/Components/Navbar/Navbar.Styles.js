
import styled from "styled-components";

export const Nav = styled.nav`
  /* max-width: 95%;         reduce width so border-radius is visible */
  margin: 0 auto;         /* center horizontally */
  background: #2b2534;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  overflow: hidden;     
  @media (max-width: 900px) {
    /* max-width: 100%;      */
    border-radius: 11px;   
  }
`;


export const NavContainer = styled.div`
  margin: 0 auto;
  padding: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Mobile-specific styles */
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: 11px;
    background: #2B2534;
    margin: 0 auto;
  }
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

  @media (max-width: 480px) {
    font-size: 0.9rem;

    img,
    svg {
      width: 3rem;
    }
  }


  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.2rem;

    img,
    svg {
      width: 4rem;
    }
  }


  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 1.5rem;

    img,
    svg {
      width: 5rem;
    }
  }


  @media (min-width: 1441px) and (max-width: 2560px) {
    font-size: 1.8rem;

    img,
    svg {
      width: 7rem;
    }
  }


  @media (min-width: 2561px) and (max-width: 4096px) {
    font-size: 2.2rem;

    img,
    svg {
      width: 10rem;
    }
  }

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
    color: #9a6bff;
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
