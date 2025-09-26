import React from "react";
import {
  ProductsWrapper,
  Card,
  ProductImage,
  ProductTitle,
} from "./ProductSection.style";

const ProductSection = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <Card key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductTitle>{product.ram} {product.storage}</ProductTitle>
        </Card>
      ))}
    </ProductsWrapper>
  );
};

export default ProductSection;
