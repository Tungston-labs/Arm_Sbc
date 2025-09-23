// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  RightSection,
  SearchBox,
  SearchInput,
  CartIcon,
  InquiryButton,
  Hamburger,
  MobileMenu,
  MobileNavItem,
  MobileInquiryButton,
  SearchIcon
} from "./Navbar.Styles";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/main/logo.svg";
import { IoMdCart } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        {/* Logo */}
      
<Logo>
  <img src={logo} alt="ARM SBC" />
</Logo>
        {/* Desktop Menu */}
        <NavLinks>
          <NavLinkItem href="#">Home</NavLinkItem>
          <NavLinkItem href="#">Products</NavLinkItem>
          <NavLinkItem href="#">Compare</NavLinkItem>
        </NavLinks>

        {/* Right Section */}
        <RightSection>
          <SearchBox>
  <SearchIcon />
  <SearchInput type="text" placeholder="Search" />
</SearchBox>
          <CartIcon>
            <IoMdCart />
          </CartIcon>
          <InquiryButton>Inquiry</InquiryButton>
        </RightSection>

        {/* Hamburger (mobile) */}
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </NavContainer>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu>
          <MobileNavItem href="#">Home</MobileNavItem>
          <MobileNavItem href="#">Product</MobileNavItem>
          <MobileNavItem href="#">Compare</MobileNavItem>
          <MobileNavItem href="#">Cart</MobileNavItem>
          <MobileInquiryButton>Inquiry</MobileInquiryButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
