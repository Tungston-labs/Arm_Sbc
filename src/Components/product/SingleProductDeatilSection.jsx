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
// import details from "../../pages/product/data/productDetailsData.json";
const SingleProductDeatilSection = ({
  name,
  description,
  image,
  category,
}) => {
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
            <AddToCartButton>
              <AiOutlineShoppingCart />
              Add to cart
            </AddToCartButton>
          </ButtonSection>
          <ul>
            {details.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p></p>  {/* need to add SKU here */}
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
            <AddToCartButton>
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
