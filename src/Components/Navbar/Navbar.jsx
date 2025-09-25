
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
  
      
<Logo>
  <img src={logo} alt="ARM SBC" />
</Logo>
      
       <NavLinks>
  <NavLinkItem href="#">Home</NavLinkItem>
  <NavLinkItem href="#">Products</NavLinkItem>
  <NavLinkItem href="#" className="compare" data-count="3">
    Compare
  </NavLinkItem>
</NavLinks>

    
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

     
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </NavContainer>

    
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