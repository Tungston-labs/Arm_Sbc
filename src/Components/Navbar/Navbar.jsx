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
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/main/logo.svg";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";  // ✅ import navigate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <Nav>
      <NavContainer>
        <Logo>
          <img src={logo} alt="ARM SBC" />
        </Logo>

        <NavLinks>
          <NavLinkItem href="/">Home</NavLinkItem>
          <NavLinkItem href="/product">Products</NavLinkItem>
          <NavLinkItem href="/compare" className="compare" data-count="3">
            Compare
          </NavLinkItem>
        </NavLinks>

        <RightSection>
          <SearchBox>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search" />
          </SearchBox>

          {/* ✅ Navigate to cartpage when clicked */}
          <CartIcon onClick={() => navigate("/cartpage")}>
            <IoMdCart />
          </CartIcon>

          <InquiryButton  onClick={() => navigate("/inquiry-page")}>Inquiry</InquiryButton>
        </RightSection>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </NavContainer>

      {isOpen && (
        <MobileMenu>
          <MobileNavItem href="/">Home</MobileNavItem>
          <MobileNavItem href="/product">Product</MobileNavItem>
          <MobileNavItem href="/compare">Compare</MobileNavItem>
          <MobileNavItem href="/cartpage">Cart</MobileNavItem>
          <MobileInquiryButton>Inquiry</MobileInquiryButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
