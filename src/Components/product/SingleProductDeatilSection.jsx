import React, { useState } from "react";
import {
  AddToCartButton,
  ButtonSection,
  CompareButton,
  DividerDiv,
  HeaderContainer,
  HeaderImageContainer,
  HeaderTextContainer,
  Link,
} from "../../pages/product/singleProduct.style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import ModalWithCards from "../../Components/Comparison/ModalWithCards"; 

const SingleProductDeatilSection = ({
  productId,
  name,
  description,
  image,
  category,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ modal state
  const cartToken = localStorage.getItem("cartToken") || null;

  const handleAddToCart = () => {
    dispatch(addProductToCart({ productId, cartToken }))
      .unwrap()
      .then(() => {
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add product to cart.");
      });
  };

  const handleViewMore = () => {
    const el = document.getElementById("specification");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const details = description ? description.split("\\n") : [];

  return (
    <HeaderContainer>
      <DividerDiv>
        <HeaderImageContainer>
          <img src={image} alt={name} />
        </HeaderImageContainer>
      </DividerDiv>
      <DividerDiv>
        <HeaderTextContainer>
          <h2>{name}</h2>

          {/* Desktop button section */}
          <ButtonSection display="none">
            <Link as="button" onClick={handleViewMore}>
              View more
            </Link>
            <AddToCartButton onClick={handleAddToCart}>
              <AiOutlineShoppingCart />
              Add to cart
            </AddToCartButton>
          </ButtonSection>

          <ul>
            {details.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <p><span>{category}</span></p>

          {/* ✅ Compare button opens modal */}
          <CompareButton onClick={() => setIsModalOpen(true)}>
            Compare
          </CompareButton>

          {/* Mobile button section */}
          <ButtonSection display="flex">
            <Link as="button" onClick={handleViewMore}>
              View more
            </Link>
            <AddToCartButton onClick={handleAddToCart}>
              <AiOutlineShoppingCart />
              Add to cart
            </AddToCartButton>
          </ButtonSection>
        </HeaderTextContainer>
      </DividerDiv>

      {/* ✅ Show modal when compare is clicked */}
      {isModalOpen && (
        <ModalWithCards
          onClose={() => setIsModalOpen(false)}
          triggerProductId={productId}
        />
      )}
    </HeaderContainer>
  );
};

export default SingleProductDeatilSection;
