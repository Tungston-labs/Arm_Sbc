// import React from "react";
// import { Section, Title } from "./HotProducts.style"; 
// import Banner from "./Banner";
// import ProductSection from "../../Components/ProductCard/ProductSection";

// const products = [
//   {
//     id: 1,
//     title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
//     image: boardImage,
//   },
//   {
//     id: 2,
//     title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
//     image: boardImage,
//   },
//   {
//     id: 3,
//     title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
//     image: boardImage,
//   },
//   {
//     id: 4,
//     title: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz",
//     image: boardImage,
//   },
// ];

// const HotProducts = () => {
//   return (
//     <>
//       <Section>
//         <Title>Hot products</Title>
//         <ProductSection products={products} />
//       </Section>
//       <Banner />
//     </>
//   );
// };

// export default HotProducts;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section, Title } from "./HotProducts.style"; 
import Banner from "./Banner";
import ProductSection from "../../Components/ProductCard/ProductSection";
import { fetchProductsPublic } from "../../redux/productSlice";

const HotProducts = () => {
  const dispatch = useDispatch();
  const { productsPublic, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsPublic());
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
