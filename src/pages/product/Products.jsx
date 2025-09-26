import {
  AllProductContainer,
  ProductCardContainer,
  ProductHeader,
} from "./product.style";
import CustomPagination from "../../Components/paginaton/CustomPagination";
import { NavbarContainer } from "./singleProduct.style";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/product/ProductCard";

const Products = () => {
  return (
    <>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <AllProductContainer>
        <ProductHeader>Products</ProductHeader>
        <ProductCardContainer>
         {[...Array(50)].map(i=><ProductCard />)} 
        </ProductCardContainer>
        <CustomPagination
          total={50}
          pageSize={5}
          defaultPage={1}
          onChange={(page) => console.log("Current Page:", page)}
        />
      </AllProductContainer>
      <Footer />
    </>
  );
};

export default Products;
