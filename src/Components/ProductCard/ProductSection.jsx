import React from "react";
import {
  ProductsWrapper,
  Card,
  ProductImage,
  ProductTitle,
} from "./ProductSection.style";
import { useNavigate } from "react-router-dom";

const ProductSection = ({ products }) => {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <Card
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)} 
          style={{ cursor: "pointer" }} 
        >
          <ProductImage src={product.image} alt={product.name} />
          <ProductTitle>
            {product.name}, {product.ram}, {product.storage}
          </ProductTitle>
        </Card>
      ))}
    </ProductsWrapper>
  );
};

export default ProductSection;
