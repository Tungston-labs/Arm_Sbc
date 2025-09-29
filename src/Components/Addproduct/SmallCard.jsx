import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAdmin } from "../../redux/productSlice";
import {
  CardGrid,
  Card,
  CardImage,
  CardTitle,
  CardDetail,
  CardDetailsWrap,
} from "./SmallCard.styles";

const SmallCard = () => {
  const dispatch = useDispatch();
  const { productsAdmin, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductsAdmin());
  }, [dispatch]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <CardGrid>
      {productsAdmin?.map((item) => (
        <Card key={item.id}>
          {/* use a fallback if image is null */}
          <CardImage src={item.image || "/placeholder.png"} alt={item.name} />
          <CardTitle>{item.description}</CardTitle>
          <CardDetailsWrap>
            <CardDetail>₹{item.price || "N/A"}</CardDetail>
            <CardDetail>{item.ram}</CardDetail>
            <CardDetail>{item.storage}</CardDetail>
          </CardDetailsWrap>
        </Card>
      ))}
    </CardGrid>
  );
};

export default SmallCard;
