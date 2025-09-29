import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductsAdmin } from "../../redux/productSlice";
import {
  CardGrid,
  Card,
  CardImage,
  CardTitle,
  CardDetail,
  CardDetailsWrap,
} from "./SmallCard.styles";
import CustomPagination from "../../Components/paginaton/CustomPagination";

const SmallCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const pageSize =20;

  const { productsAdmin, totalCount, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductsAdmin({ page, pageSize }));
  }, [dispatch, page]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <CardGrid>
        {productsAdmin?.map((item) => (
          <Card
            key={item.id}
            onClick={() => navigate(`/products/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <CardImage src={item.image || "/placeholder.png"} alt={item.name} />
            <CardTitle>{item.description}</CardTitle>
            <CardDetailsWrap>
              <CardDetail>{item.cores || "N/A"} Core</CardDetail>
              <CardDetail>{item.ram} Ram</CardDetail>
              <CardDetail>{item.storage} Storage</CardDetail>
            </CardDetailsWrap>
          </Card>
        ))}
      </CardGrid>

      <CustomPagination
        total={totalCount || 0}  
        pageSize={pageSize}
        defaultPage={1}
        onChange={(newPage) => setPage(newPage)}
      />
    </>
  );
};

export default SmallCard;
