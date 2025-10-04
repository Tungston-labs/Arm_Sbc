import React, { useState, useEffect, useRef } from "react";
import {
  CloseButton,
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
import { toast } from "react-toastify";

export default function ModalWithCards({ onClose, triggerProductId }) {
  const dispatch = useDispatch();
  const toastRef = useRef(false);
  const compareToastRef = useRef(false);
  const { productsPublic, loading } = useSelector((state) => state.product);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsPublic({ currentPage: 1, limit: 12 }));

    if (triggerProductId) setSelectedIds([triggerProductId]);
  }, [dispatch, triggerProductId]);


const handleSelect = (id) => {
  setSelectedIds((prev) => {
    if (prev.includes(id)) {
      return prev.filter((pid) => pid !== id);
    } else if (prev.length < 4) {
      return [...prev, id];
    } else {
      if (!toastRef.current) {
        toastRef.current = true;
        toast.error("You can select up to 4 products only!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
        });
        setTimeout(() => {
          toastRef.current = false; 
        }, 2000);
      }
      return prev;
    }
  });
};
const handleCompare = () => {
  if (selectedIds.length < 2) {
    if (!compareToastRef.current) {
      compareToastRef.current = true;
      toast.error("Please select at least 2 products to compare.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      setTimeout(() => (compareToastRef.current = false), 2000);
    }
    return;
  }

  const selectedProducts = productsPublic.results.filter((p) =>
    selectedIds.includes(p.id)
  );
  localStorage.setItem("comparisonProducts", JSON.stringify(selectedProducts));
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
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Product Comparison</Title>
        <SubHeader>Select up to 4 products</SubHeader>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <InnerGrid>
            {productsPublic?.results
              ?.slice()
              .sort((a, b) => {
                if (a.id === triggerProductId) return -1;
                if (b.id === triggerProductId) return 1;
                return 0;
              })
              .map((item) => (
                <ProductCard
                  key={item.id}
                  $selected={selectedIds.includes(item.id)}
                  $trigger={item.id === triggerProductId}
                  onClick={() => {
                    if (item.id !== triggerProductId) handleSelect(item.id);
                  }}
                >
                  <img src={item.image || Chip} alt={item.name} />
                  <p>{item.name}</p>
                  <p>
                    {item.ram} || {item.cores} || {item.storage}
                  </p>
                  {item.id === triggerProductId && (
                    <span style={{ fontSize: "12px", color: "#28a745" }}>
                      Base Product
                    </span>
                  )}
                </ProductCard>
              ))}
          </InnerGrid>
        )}

        {/* Only call handleCompare here */}
        <CompareButton onClick={handleCompare}>Compare</CompareButton>
      </ModalCard>
    </Overlay>
  );
}
