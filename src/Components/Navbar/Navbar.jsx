import React, { useEffect, useState } from "react";
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
 import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../redux/cartSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [compareCount, setCompareCount] = useState(0);
  const navigate = useNavigate();
 

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const cartToken = localStorage.getItem("cartToken");

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

  useEffect(() => {
    if (cartToken && (!items || !items.items)) {
      dispatch(fetchCartItems({ cartToken }));
    }
  }, [dispatch, cartToken, items]);
  const cartCount = items?.items?.length || 0;
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <img src={logo} alt="ARM SBC" />
        </Logo>

        <NavLinks>
          <NavLinkItem as={Link} to="/">
            Home
          </NavLinkItem>
          <NavLinkItem as={Link} to="/product">
            Products
          </NavLinkItem>
          <NavLinkItem
            as={Link}
            to="/compare"
            className="compare"
            // data-count="3"
          >
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
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
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
          <MobileNavItem as={Link} to="/">
            Home
          </MobileNavItem>
          <MobileNavItem as={Link} to="/product">
            Product
          </MobileNavItem>
          <MobileNavItem as={Link} to="/compare">
            Compare {compareCount > 0 && `(${compareCount})`}
          </MobileNavItem>
          <MobileNavItem as={Link} to="/cartpage">
            Cart
          </MobileNavItem>
          <MobileInquiryButton onClick={() => navigate("/inquiry-page")}>
            Inquiry
          </MobileInquiryButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
