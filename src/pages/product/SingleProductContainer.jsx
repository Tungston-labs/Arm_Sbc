import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductPublic } from "../../redux/productSlice";
import SingleProduct from "./SingleProduct";
import { useParams } from "react-router-dom";
import { convertAdditionalInfo, convertSpecs } from "../../utils/productTransform";

const SingleProductContainer = () => {
  const productId = useParams()?.id;
  const dispatch = useDispatch();
  const { productDetailPublic, loading, error } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProductPublic({ productId }));
  }, [dispatch, productId]);

 const addetionalInformation = convertAdditionalInfo(productDetailPublic?.additional_info);
  const description = convertSpecs(productDetailPublic?.specs);

  return (
    <SingleProduct
      product={productDetailPublic}
      addetionalInformation={addetionalInformation}
      description={description}
      loading={loading}
      error={error}
    />
  );
};

export default SingleProductContainer;
