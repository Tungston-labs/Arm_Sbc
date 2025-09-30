import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; // ✅ import this
import { fetchProductsPublic } from "../../redux/productSlice";
import Products from "./Products";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const [searchParams] = useSearchParams(); // ✅ get search params
  const query = searchParams.get("search") || ""; // ✅ extract search query

  const { productsPublic, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductsPublic({ currentPage, limit, search: query }));
  }, [dispatch, currentPage, query]); // ✅ include query

  return (
    <Products
      products={productsPublic?.results || []}
      loading={loading}
      error={error}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={productsPublic?.totalPages || 0}
      totalCount={productsPublic?.totalCount || 0}
      limit={limit}
    />
  );
};

export default ProductsContainer;
