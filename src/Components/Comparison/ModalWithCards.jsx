import React, { useState, useEffect } from "react";
import {
  CompareButton,
  InnerGrid,
  ModalCard,
  Overlay,
  ProductCard,
  SubHeader,
  Title,
} from "./ModalWithCards.styled";
import Chip from "../../assets/Comparison/chip.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsPublic } from "../../redux/productSlice";

export default function ModalWithCards({ onClose }) {
  const dispatch = useDispatch();
  const { productsPublic, loading } = useSelector((state) => state.product);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsPublic({ currentPage: 1, limit: 12 }));
  }, [dispatch]);

  const handleSelect = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((pid) => pid !== id);
      } else if (prev.length < 4) {
        return [...prev, id];
      } else {
        alert("You can select up to 4 products only!");
        return prev;
      }
    });
  };

  const handleCompare = () => {
    if (selectedIds.length < 2) {
      alert("Please select at least 2 products to compare.");
      return;
    }
    const selectedProducts = productsPublic.results.filter((p) =>
      selectedIds.includes(p.id)
    );
    localStorage.setItem(
      "comparisonProducts",
      JSON.stringify(selectedProducts)
    );
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <Title>Product Comparison</Title>
        <SubHeader>Select up to 4 products</SubHeader>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <InnerGrid>
            {productsPublic?.results?.map((item) => (
              <ProductCard
                key={item.id}
                $selected={selectedIds.includes(item.id)}
                onClick={() => handleSelect(item.id)}
              >
                <img src={item.image || Chip} alt={item.name} />
                <p>{item.name}</p>
                <p>
                  {item.ram} || {item.cores} || {item.storage}
                </p>
              </ProductCard>
            ))}
          </InnerGrid>
        )}

        <CompareButton onClick={handleCompare}>Compare</CompareButton>
      </ModalCard>
    </Overlay>
  );
}
