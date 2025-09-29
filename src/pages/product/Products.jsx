import {
  AllProductContainer,
  CenterContainer,
  ProductCardContainer,
  ProductHeader,
} from "./product.style";
import CustomPagination from "../../Components/paginaton/CustomPagination";
import { NavbarContainer } from "./singleProduct.style";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/product/ProductCard";
import OvalSpinner from "../../Components/spinner/OvalSpinner";

const Products = ({
  products,
  loading,
  currentPage,
  setCurrentPage,
  totalPages,
  totalCount,
  limit,
}) => {
  return (
    <>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <AllProductContainer>
        <ProductHeader>Products</ProductHeader>
        {loading ? (
          <CenterContainer>
            <OvalSpinner size="large" />
          </CenterContainer>
        ) : !products?.length > 0 ? (
          <CenterContainer>
            <p>No products found.</p>
          </CenterContainer>
        ) : (
          <ProductCardContainer>
            {products.map((i) => (
              <ProductCard
                key={i?.id}
                image={i?.image}
                text={i?.name}
                id={i?.id}
              />
            ))}
          </ProductCardContainer>
        )}
        {products?.length > 0 && totalPages > 1 && !loading && (
          <CustomPagination
            total={totalCount}
            pageSize={limit}
            current={currentPage}
            onChange={(newPage) => setCurrentPage(newPage)}
          />
        )}
      </AllProductContainer>
      <Footer />
    </>
  );
};

export default Products;
