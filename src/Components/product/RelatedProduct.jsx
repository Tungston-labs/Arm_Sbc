import {
  ProductCadContainer,
  RelatedProductContainer,
} from "../../pages/product/singleProduct.style";
import ProductCard from "./ProductCard";

const RelatedProduct = () => {
  return (
    <RelatedProductContainer>
      <h3>Related products</h3>
      <ProductCadContainer>
        {[...Array(10)].map((i) => (
          <ProductCard display="none"/>
        ))}
      </ProductCadContainer>
    </RelatedProductContainer>
  );
};

export default RelatedProduct;
