import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductPublic } from "../../redux/productSlice";
import SingleProduct from "./SingleProduct";
import { useParams } from "react-router-dom";
import {
  convertAdditionalInfo,
  convertSpecs,
} from "../../utils/productTransform";
import { fetchReviews } from "../../redux/reviewSlice";
import { toast } from "react-toastify";

const SingleProductContainer = () => {
  const productId = useParams()?.id;
  const dispatch = useDispatch();

  const hasFetched = useRef(false); //for reviews
  const hasFetchedProduct = useRef(false); // prevent multiple product fetches

  const { productDetailPublic, productDetailLoading,productDetailError } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    const loadProduct = async () => {
      if (hasFetchedProduct.current) return;
      hasFetchedProduct.current = true;

      try {
        await dispatch(fetchProductPublic({ productId })).unwrap();
      } catch (err) {
        toast.error("Failed to load product details");
      }
    };
    loadProduct();
  }, [dispatch, productId]);

  const addetionalInformation = convertAdditionalInfo(
    productDetailPublic?.additional_info
  );
  const description = convertSpecs(productDetailPublic?.specs);

  useEffect(() => {
    const loadReviews = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        await dispatch(fetchReviews({ productId })).unwrap();
      } catch (error) {
        toast.error("Failed to load reviews");
      }
    };
    loadReviews();
  }, [dispatch, productId]);
  return (
    <SingleProduct
      product={productDetailPublic}
      addetionalInformation={addetionalInformation}
      description={description}
      loading={productDetailLoading}
      error={productDetailError}
      productId={productId}
    />
  );
};

export default SingleProductContainer;
