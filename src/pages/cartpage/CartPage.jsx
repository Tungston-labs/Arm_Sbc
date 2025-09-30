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
import { Link, useNavigate } from "react-router-dom";
import { EmptyState } from "../EnquiryPage/EnquiryDetails.Styles";
import NoEnquiry from "../../assets/inquriy/noenquiry.svg";
import OvalSpinner from "../../Components/spinner/OvalSpinner";
const Cart = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const cartToken = localStorage.getItem("cartToken");
  useEffect(() => {
    if (cartToken) {
      dispatch(fetchCartItems({ cartToken }));
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
            <OvalSpinner />
          ) : items?.items?.length > 0 ? (
            items?.items?.map((item, index) => (
              <React.Fragment key={item.id}>
                <CartItem>
                  <ProductImage src={item?.product?.image} alt={item.name} />
                  <ProductDetails>
                    <ProductHeader>
                      <ProductName>{item?.product?.name}</ProductName>
                      <RemoveButton onClick={() => removeItem(item.id)}>
                        ✕
                      </RemoveButton>
                    </ProductHeader>
                    <ProductSpecs>
                      <li>{item?.product?.cores} core</li>
                      <li>{item?.product?.ram}</li>
                      <li>{item?.product?.storage}</li>
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
                      <MoreInfo as={Link} to="/product">
                        See more like this
                      </MoreInfo>
                    </QuantityControl>
                  </ProductDetails>
                </CartItem>
                <Divider />
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
