import React from "react";
import {
  ProductsWrapper,
  Card,
  ProductImage,
  ProductTitle,
} from "./ProductSection.style";

const ProductSection = ({ products }) => {
  return (
    <ProductsWrapper>
      {products.map((product) => (
        <Card key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
        </Card>
      ))}
    </ProductsWrapper>
  );
};

export default ProductSection;
