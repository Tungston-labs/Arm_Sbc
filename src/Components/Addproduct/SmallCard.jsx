import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const [page, setPage] = useState(() => {
    const qp = new URLSearchParams(window.location.search).get("page");
    return qp ? Number(qp) : 1;
  });
  const pageSize = 20;

  const { productsAdmin, totalCount, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductsAdmin({ page, pageSize }));
  }, [dispatch, page]);

  useEffect(() => {
    const qp = new URLSearchParams(location.search).get("page");
    const p = qp ? Number(qp) : 1;
    if (p !== page) setPage(p);
  }, [location.search]);

  const handleCardClick = (id) => {
    navigate(`/products/${id}?page=${page}`, { state: { fromPage: page } });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);

    const qs = new URLSearchParams(location.search);
    qs.set("page", String(newPage));
    navigate(`${location.pathname}?${qs.toString()}`, { replace: true });
  };

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <>
      <CardGrid>
        {productsAdmin?.map((item) => (
          <Card
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            style={{ cursor: "pointer" }}
          >
            <CardImage src={item.image || "/placeholder.png"} alt={item.name} />
            <CardTitle>{item.name}</CardTitle>
            <CardDetailsWrap>
              <CardDetail>{item.cores || "N/A"} Core</CardDetail>
              <CardDetail>{item.ram || "N/A"} Ram</CardDetail>
              <CardDetail>{item.storage || "N/A"} Storage</CardDetail>
            </CardDetailsWrap>
          </Card>
        ))}
      </CardGrid>

      <CustomPagination
        total={totalCount || 0}
        pageSize={pageSize}
        defaultPage={page}    
        onChange={(newPage) => handlePageChange(newPage)}
      />
    </>
  );
};

export default SmallCard;
