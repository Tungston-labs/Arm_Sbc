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
import details from "../../pages/product/data/productDetailsData.json";
const SingleProductDeatilSection = () => {
  return (
    <HeaderContainer>
      <DividerDiv>
        <HeaderImageContainer>
          <img src="https://placehold.co/600x400" />
        </HeaderImageContainer>
      </DividerDiv>
      <DividerDiv>
        <HeaderTextContainer>
          <h2>ARM Develeopment Board Rockchip 3288, Quad Core 1.7 GHz</h2>
          <ButtonSection display="none">
            <Link>View more</Link>
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
          <p>SKU: 123-1-2</p>
          <p>
            {[1, 2, 3].map((i) => (
              <span>{i}</span>
            ))}
          </p>
          <CompareButton>compare</CompareButton>
          <ButtonSection display="flex">
            <Link>View more</Link>
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
