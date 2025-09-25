import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SingleProductDeatilSection from "../../Components/product/SingleProductDeatilSection";
import SpecificationSection from "../../Components/product/Specification/SpecificationSection";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <SingleProductDeatilSection />
      <SpecificationSection />
      <Footer/>
    </>
  );
};

export default SingleProduct;
