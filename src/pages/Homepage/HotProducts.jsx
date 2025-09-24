
import React from "react";
import {
  Section,
  Title,
  ProductsWrapper,
  Card,
  ProductImage,
  ProductTitle,
} from "./HotProducts.style";

import boardImg from "../../assets/main/chip.png"; 
import Banner from "./Banner";

const products = [
  {
    id: 1,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImg,
  },
  {
    id: 2,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImg,
  },
  {
    id: 3,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImg,
  },
  {
    id: 4,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImg,
  },
];

const HotProducts = () => {
  return (
    <>
    <Section>
      <Title>Hot products</Title>
      <ProductsWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
          </Card>
        ))}
      </ProductsWrapper>
    </Section>
    <Banner/>
    </>
  );
};

export default HotProducts;
