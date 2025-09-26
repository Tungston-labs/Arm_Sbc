import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import RelatedProduct from "../../Components/product/RelatedProduct";
import SingleProductDeatilSection from "../../Components/product/SingleProductDeatilSection";
import SpecificationSection from "../../Components/product/Specification/SpecificationSection";
import { NavbarContainer } from "./singleProduct.style";

const SingleProduct = () => {
  return (
    <>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <SingleProductDeatilSection />
      <SpecificationSection />
      <RelatedProduct />
      <Footer />
    </>
  );
};

export default SingleProduct;
