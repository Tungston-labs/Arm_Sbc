import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; 
import { fetchProductsPublic } from "../../redux/productSlice";
import Products from "./Products";
import { toast } from "react-toastify";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const [searchParams] = useSearchParams(); 
  const query = searchParams.get("search") || ""; 

  const { productsPublic, loading, error } = useSelector(
    (state) => state.product
  );
  const hasFetched = useRef(false);

  useEffect(() => {
    const loadProducts = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        // await dispatch(fetchProductsPublic({ currentPage, limit })).unwrap();
        await dispatch(fetchProductsPublic({ currentPage, limit, search: query })).unwrap();
      } catch (err) {
        toast.error("Failed to load products");
      }
    };

    loadProducts();
  }, [dispatch, currentPage, limit]);

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
