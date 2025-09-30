import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section, Title } from "./HotProducts.style"; 
import Banner from "./Banner";
import ProductSection from "../../Components/ProductCard/ProductSection";
import { fetchProductsPublic } from "../../redux/productSlice";

const HotProducts = () => {
  const dispatch = useDispatch();
  const { productsPublic, loading, error } = useSelector((state) => state.product);
const currentPage=1;
const limit =4;
  useEffect(() => {
    dispatch(fetchProductsPublic({currentPage, limit}));
  }, [dispatch]);

  if (loading) return <p>Loading hot products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  // Only first 4 products from results array
  const hotProducts = productsPublic?.results?.slice(0, 4) || [];
console.log({hotProducts});

  return (
    <>
      <Section>
        <Title>Hot products</Title>
        <ProductSection products={hotProducts} />
      </Section>
      <Banner />
    </>
  );
};

export default HotProducts;
