import React, { useState, useEffect } from "react";
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
  SearchIcon,Badge
} from "./Navbar.Styles";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/main/logo.svg";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [compareCount, setCompareCount] = useState(0);
  const navigate = useNavigate();

  // Load comparison count from localStorage
  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("comparisonProducts");
      setCompareCount(stored ? JSON.parse(stored).length : 0);
    };
  
    // Initial load
    updateCount();
  
    // Listen for updates
    window.addEventListener("comparisonUpdated", updateCount);
  
    return () => window.removeEventListener("comparisonUpdated", updateCount);
  }, []);
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/product?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>
          <img src={logo} alt="ARM SBC" />
        </Logo>

        <NavLinks>
          <NavLinkItem href="/">Home</NavLinkItem>
          <NavLinkItem href="/product">Products</NavLinkItem>
          <NavLinkItem href="/compare" className="compare">
  Compare {compareCount > 0 && <Badge>{compareCount}</Badge>}
</NavLinkItem>


        </NavLinks>

        <RightSection>
          <SearchBox onSubmit={handleSearch}>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch(e);
              }}
            />
          </SearchBox>

          <CartIcon onClick={() => navigate("/cartpage")}>
            <IoMdCart />
          </CartIcon>

          <InquiryButton onClick={() => navigate("/inquiry-page")}>
            Inquiry
          </InquiryButton>
        </RightSection>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </NavContainer>

      {isOpen && (
        <MobileMenu>
          <MobileNavItem href="/">Home</MobileNavItem>
          <MobileNavItem href="/product">Product</MobileNavItem>
          <MobileNavItem href="/compare">
            Compare {compareCount > 0 && `(${compareCount})`}
          </MobileNavItem>
          <MobileNavItem href="/cartpage">Cart</MobileNavItem>
          <MobileInquiryButton>Inquiry</MobileInquiryButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
