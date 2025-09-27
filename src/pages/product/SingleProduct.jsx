import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import RelatedProduct from "../../Components/product/RelatedProduct";
import SingleProductDeatilSection from "../../Components/product/SingleProductDeatilSection";
import SpecificationSection from "../../Components/product/Specification/SpecificationSection";
import { NavbarContainer } from "./singleProduct.style";

const SingleProduct = ({ product,addetionalInformation,description }) => {
  return (
    <>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <SingleProductDeatilSection
        name={product?.name}
        description={product?.description}
        image={product?.image}
        category={product?.ram}
      />
      <SpecificationSection
        description={description}
        addetionalInformation={addetionalInformation}
      />
      <RelatedProduct />
      <Footer />
    </>
  );
};

export default SingleProduct;
