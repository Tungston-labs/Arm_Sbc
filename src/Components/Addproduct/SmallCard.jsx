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
import noProductsImg from "../../assets/AddProduct/AddIcon.png";

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

  if (loading) return <p style={{ textAlign: "center" }}>Loading…</p>;
  if (error)
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        Error: {String(error)}
      </p>
    );

  const hasNoProducts = !productsAdmin || productsAdmin.length === 0;

  if (hasNoProducts) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ccc",
        }}
      >
        <img
          src={noProductsImg}
          alt="No products found"
          style={{
            width: "400px",
            height: "auto",
            marginBottom: "1.5rem",
            opacity: 0.9,
          }}
        />
        <h2 style={{ color: "#fff", marginBottom: "0.5rem" }}>
          No Products Found
        </h2>
        <p style={{ color: "#bbb" }}>
          Start adding products to see them listed here.
        </p>
      </div>
    );
  }

  return (
    <>
      <CardGrid>
        {productsAdmin.map((item) => (
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

      {totalCount > pageSize && (
        <CustomPagination
          total={totalCount || 0}
          pageSize={pageSize}
          defaultPage={page}
          onChange={handlePageChange}
        />
      )}
    </>
  );
};

export default SmallCard;
