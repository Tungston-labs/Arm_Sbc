import React from "react";
import { Section, Title } from "./HotProducts.style"; 
import boardImage from "../../assets/main/chip.png"; 
import Banner from "./Banner";
import ProductSection from "../../Components/ProductCard/ProductSection";

const products = [
  {
    id: 1,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImage,
  },
  {
    id: 2,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImage,
  },
  {
    id: 3,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImage,
  },
  {
    id: 4,
    title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
    image: boardImage,
  },
];

const HotProducts = () => {
  return (
    <>
      <Section>
        <Title>Hot products</Title>
        <ProductSection products={products} />
      </Section>
      <Banner />
    </>
  );
};

export default HotProducts;
