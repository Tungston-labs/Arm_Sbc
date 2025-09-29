import React, { useEffect } from "react";
import {
  CartContainer,
  CartHeader,
  Container,
  CartTitle,
  EnquiryButton,
  CartItem,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductSpecs,
  QuantityControl,
  QuantityButton,
  QuantityValue,
  RemoveButton,
  MoreInfo,
  Divider,
  ProductHeader,
} from "./CartPage.Styles";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  updateCartQuantity,
  deleteCartItem,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "../EnquiryPage/EnquiryDetails.Styles";
import NoEnquiry from "../../assets/inquriy/noenquiry.svg";
const Cart = () => {
  const dispatch = useDispatch();
  const { items: cartItems, loading } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const cartToken = localStorage.getItem("cartToken"); 

  useEffect(() => {
    if (cartToken) {
      dispatch(fetchCartItems(cartToken));
    }
  }, [dispatch, cartToken]);

  const increaseQty = (id, currentQty) => {
    dispatch(updateCartQuantity({ itemId: id, quantity: currentQty + 1 }));
  };

  const decreaseQty = (id, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateCartQuantity({ itemId: id, quantity: currentQty - 1 }));
    }
  };

  const removeItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <>
      <CartContainer>
        <Navbar />
        <Container>
          <CartHeader>
            <CartTitle>Cart</CartTitle>
          <EnquiryButton onClick={() => navigate("/inquiry-page")}>
        Product Inquire
      </EnquiryButton>
          </CartHeader>
          <Divider />

          {loading ? (
            <p>Loading...</p>
          ) : cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <CartItem>
                  <ProductImage src={item.image} alt={item.name} />
                  <ProductDetails>
                    <ProductHeader>
                      <ProductName>{item.name}</ProductName>
                      <RemoveButton onClick={() => removeItem(item.id)}>
                        ✕
                      </RemoveButton>
                    </ProductHeader>
                    <ProductSpecs>
                      {item.specs.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ProductSpecs>
                    <QuantityControl>
                      <QuantityButton
                        onClick={() => decreaseQty(item.id, item.quantity)}
                      >
                        -
                      </QuantityButton>
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <QuantityButton
                        onClick={() => increaseQty(item.id, item.quantity)}
                      >
                        +
                      </QuantityButton>
                      <MoreInfo href="#">See more like this</MoreInfo>
                    </QuantityControl>
                  </ProductDetails>
                </CartItem>
                {index < cartItems.length - 1 && <Divider />}
              </React.Fragment>
            ))
          ) : (
            <EmptyState>
                   <img src={NoEnquiry} alt="No product enquiries" />
                 </EmptyState>
          )}
        </Container>
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;
