import React, { useState } from "react";
import {
  CartContainer,
  CartHeader,
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
} from "./CartPage.Styles";
import Navbar from "../../Components/Navbar/Navbar"
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
      specs: ["2 core", "8 GB RAM", "32 GB Storage"],
    image: "images/cart/chip.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
      specs: ["2 core", "8 GB RAM", "32 GB Storage"],
     image: "images/cart/chip.png",
      quantity: 1,
    },
     {
      id: 3,
      name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
      specs: ["2 core", "8 GB RAM", "32 GB Storage"],
     image: "images/cart/chip.png",
      quantity: 1,
    },
    
  ]);

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
<Navbar/>
    <CartContainer>
      {/* Header */}
      <CartHeader>
        <CartTitle>Cart</CartTitle>
        <EnquiryButton>Product Inquire</EnquiryButton>
        
      </CartHeader>
<Divider />
      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <CartItem>
            <ProductImage src={item.image} alt={item.name} />
            <ProductDetails>
              <ProductName>{item.name}</ProductName>
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
            <RemoveButton onClick={() => removeItem(item.id)}>✕</RemoveButton>
          </CartItem>
          {index < cartItems.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </CartContainer>
      </>
  );
};

export default Cart;
