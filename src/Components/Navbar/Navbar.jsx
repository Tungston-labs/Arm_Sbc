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
import { Link, useNavigate } from "react-router-dom";  
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 
const { items } = useSelector((state) => state.cart); 
  const cartCount = items?.items?.length || 0;
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <img src={logo} alt="ARM SBC" />
        </Logo>

        <NavLinks>
          <NavLinkItem as={Link} to="/">Home</NavLinkItem>
          <NavLinkItem as={Link} to="/product">Products</NavLinkItem>
          <NavLinkItem as={Link} to="/compare" className="compare" data-count="3">
            Compare
          </NavLinkItem>
        </NavLinks>

        <RightSection>
          <SearchBox>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search" />
          </SearchBox>

        <CartIcon onClick={() => navigate("/cartpage")}>
  <IoMdCart />
  <span className="badge">{cartCount}</span> 
</CartIcon>
          <InquiryButton  onClick={() => navigate("/inquiry-page")}>Inquiry</InquiryButton>
        </RightSection>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </NavContainer>

      {isOpen && (
        <MobileMenu>
          <MobileNavItem as={Link} to="/">Home</MobileNavItem>
          <MobileNavItem as={Link} to="/product">Product</MobileNavItem>
          <MobileNavItem as={Link} to="/compare">Compare</MobileNavItem>
          <MobileNavItem as={Link} to="/cartpage">Cart</MobileNavItem>
          <MobileInquiryButton onClick={() => navigate("/inquiry-page")}>Inquiry</MobileInquiryButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
