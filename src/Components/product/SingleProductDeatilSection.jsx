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
const SingleProductDeatilSection = ({
  productId,
  name,
  description,
  image,
  category,
}) => {
  const dispatch = useDispatch();
  const cartToken = localStorage.getItem("cartToken") || null;

 const handleAddToCart = () => {
  dispatch(addProductToCart({ productId, cartToken }))
    .unwrap()
    .then((response) => {
      toast.success("Product added to cart successfully!");
    })
    .catch((error) => {
      console.log(error)
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
          <img src={image} />
        </HeaderImageContainer>
      </DividerDiv>
      <DividerDiv>
        <HeaderTextContainer>
          <h2>{name}</h2>
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
          <p></p> {/* need to add SKU here */}
          <p>
            {/* {[1, 2, 3].map((i) => ( */}
            <span>{category}</span>
            {/* ))} */}
          </p>
          <CompareButton>compare</CompareButton>
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
    </HeaderContainer>
  );
};

export default SingleProductDeatilSection;
