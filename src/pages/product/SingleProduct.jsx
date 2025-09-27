import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import RelatedProductContainer from "../../Components/product/RelatedProductContainer";
import SingleProductDeatilSection from "../../Components/product/SingleProductDeatilSection";
import SpecificationSection from "../../Components/product/Specification/SpecificationSection";
import OvalSpinner from "../../Components/spinner/OvalSpinner";
import { CenterContainer } from "./product.style";
import { HeaderContainer, NavbarContainer } from "./singleProduct.style";

const SingleProduct = ({
  product,
  addetionalInformation,
  description,
  productId,
  loading,
}) => {
  return (
    <>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      {loading ? (
        <HeaderContainer>
          <CenterContainer>
            <OvalSpinner />
          </CenterContainer>
        </HeaderContainer>
      ) : (
        <>
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
          <RelatedProductContainer productId={productId} />
        </>
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
