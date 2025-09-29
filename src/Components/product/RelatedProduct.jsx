import { CenterContainer } from "../../pages/product/product.style";
import {
  ProductCadContainer,
  RelatedProductContainer,
} from "../../pages/product/singleProduct.style";
import OvalSpinner from "../spinner/OvalSpinner";
import ProductCard from "./ProductCard";

const RelatedProduct = ({ products, loading }) => {
  products;
  return (
    <RelatedProductContainer>
      {loading ? (
        <>
          <h3>Related products</h3>
          <CenterContainer>
            <OvalSpinner />
          </CenterContainer>
        </>
      ) : (
        products?.length > 0 && (
          <>
            <h3>Related products</h3>
            <ProductCadContainer>
              {products?.map((i) => (
                <ProductCard
                  id={i?.id}
                  image={i?.image}
                  text={i?.name}
                  display="none"
                />
              ))}
            </ProductCadContainer>
          </>
        )
      )}
    </RelatedProductContainer>
  );
};

export default RelatedProduct;
