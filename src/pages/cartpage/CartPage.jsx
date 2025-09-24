import React, { useState } from "react";
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
import cartData from "./cartData"; 

const Cart = () => {
  const [cartItems, setCartItems] = useState(cartData); 

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <CartContainer>
        <Navbar />
        <Container>
          <CartHeader>
            <CartTitle>Cart</CartTitle>
            <EnquiryButton>Product Inquire</EnquiryButton>
          </CartHeader>
          <Divider />

          {cartItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <CartItem>
                <ProductImage src={item.image} alt={item.name} />
                <ProductDetails>
                  <ProductHeader>
                    <ProductName>{item.name}</ProductName>
                    <RemoveButton onClick={() => removeItem(item.id)}>✕</RemoveButton>
                  </ProductHeader>
                  <ProductSpecs>
                    {item.specs.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ProductSpecs>
                  <QuantityControl>
                    <QuantityButton onClick={() => decreaseQty(item.id)}>-</QuantityButton>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <QuantityButton onClick={() => increaseQty(item.id)}>+</QuantityButton>
                    <MoreInfo href="#">See more like this</MoreInfo>
                  </QuantityControl>
                </ProductDetails>
              </CartItem>
              {index < cartItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Container>
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;
