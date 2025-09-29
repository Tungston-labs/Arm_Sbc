import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../../redux/productSlice";

import RelatedProduct from "./RelatedProduct";
const RelatedProductContainer = ({ productId }) => {
  const dispatch = useDispatch();
  const { relatedProducts, relatedLoading } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchRelatedProducts({ productId }));
  }, [dispatch, productId]);

  return (
    <RelatedProduct
      products={relatedProducts}
      loading={relatedLoading}
    />
  );
};

export default RelatedProductContainer;
