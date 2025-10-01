import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { fetchProductsPublic } from "../../redux/productSlice";
import ModalWithCards from "../../Components/Comparison/ModalWithCards";

const Products = ({
  products,
  loading,
  currentPage,
  setCurrentPage,
  totalPages,
  totalCount,
  limit,
}) => {
   const dispatch = useDispatch(); 
     const [showModal, setShowModal] = useState(false);
const [currentCompareId, setCurrentCompareId] = useState(null);
const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
  dispatch(fetchProductsPublic({ currentPage: newPage, limit }));
};

const handleOpenModal = (id) => {
  setCurrentCompareId(id); 
  setShowModal(true);
};
const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <NavbarContainer>
        <Navbar />
     
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
  onCompare={() => handleOpenModal(i?.id)}
              />
            ))}
          </ProductCardContainer>
        )}
        {products?.length > 0 && totalPages > 1 && !loading && (
       <CustomPagination
  total={totalCount}
  pageSize={limit}
  current={currentPage}
  onChange={handlePageChange} 
/>

        )}
      </AllProductContainer>
        {showModal && <ModalWithCards onClose={handleCloseModal}
         triggerProductId={currentCompareId} />}
      <Footer />
       </NavbarContainer>
    </>
  );
};

export default Products;
