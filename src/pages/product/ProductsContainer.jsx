import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsPublic } from "../../redux/productSlice";
import Products from "./Products";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const { productsPublic, loading, error } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProductsPublic({ currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  return (
    <Products
      products={productsPublic?.results || []}
      loading={loading}
      error={error}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={productsPublic?.totalPages || 0}
      limit={limit}
    />
  );
};

export default ProductsContainer;
