import { useState, useEffect } from "react";
import {
  ProductList,
  ProductCard,
  ProductTitle,
  ProductSpecs,
  ProductAction,
  Heading,
  MobileOnly,
  DesktopOnly,
  EmptyCartWrapper,
  QuantityInput,
} from "../../pages/Inquiryform/InquiryPage.Styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Divider } from "../../pages/cartpage/CartPage.Styles";
import Nodata from "../../assets/inquriy/mobilenodata.svg";
import Nodatas from "../../assets/inquriy/nodata.svg";
import { products as productsData } from "../../pages/Inquiryform/productsData";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductListSection({ selectedProducts, setSelectedProducts }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { items ,loading} = useSelector((state) => state.cart);
  const cartToken = localStorage.getItem("cartToken");

  useEffect(() => {
    if (cartToken) {
      dispatch(fetchCartItems({ cartToken }));
    }
  }, [dispatch, cartToken]);

  useEffect(() => {
    if (items) {
      setSelectedProducts(items.items || []);
    }
  }, [items]);

  useEffect(() => {
    if (selectedProducts.length === 0) {
      setSelectedProducts(productsData);
    }
  }, []);

  const handleDelete = (id) => {
    const updated = selectedProducts.filter((p) => p?.product?.id !== id);
    setSelectedProducts(updated);
  };

  return (
    <div>
      <MobileOnly>
        <Heading>Product Inquiry</Heading>
        <Divider />
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            padding: "0.8rem 1rem",
            borderRadius: "8px",
            margin: "1rem 0",
          }}
        >
          <span>Items cart</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isOpen && (
          <>
            {selectedProducts?.length > 0 ? (
              <ProductList>
                {selectedProducts?.map((product) => (
                  <ProductCard key={product.id}>
                    <ProductTitle>{product?.product?.name}</ProductTitle>
                    <ProductSpecs>
                      <li>{product?.product?.cores} Core</li>
                      <li>{product?.product?.ram} Ram</li>
                      <li>{product?.product?.storage} Storage</li>
                    <li>
    Qty:{" "}
    <QuantityInput
  type="number"
  min={1}
  value={product.quantity || 1}
  onChange={(e) => {
    const updated = selectedProducts.map((p) =>
      p.product.id === product.product.id
        ? { ...p, quantity: parseInt(e.target.value) }
        : p
    );
    setSelectedProducts(updated);
  }}
/>

  </li>
                    </ProductSpecs>
                    <ProductAction>
                      <button
                        onClick={() => handleDelete(product?.product?.id)}
                      >
                        Delete
                      </button>
                      <Link to="/product">See more like this</Link>
                    </ProductAction>
                    <Divider />
                  </ProductCard>
                ))}
              </ProductList>
            ) : (
              <EmptyCartWrapper>
                <img src={Nodata} alt="Empty Cart" />
              </EmptyCartWrapper>
            )}
          </>
        )}
      </MobileOnly>

      <DesktopOnly>
        <Heading>Product Inquiry</Heading>
        <Divider />
        {selectedProducts?.length > 0 ? (
          <ProductList>
            {selectedProducts?.map((product) => (
              <ProductCard key={product.id}>
                <ProductTitle>{product?.product?.name}</ProductTitle>
                <ProductSpecs>
                  <li>{product?.product?.cores} core</li>
                  <li>{product?.product?.ram}</li>
                  <li>{product?.product?.storage}</li>
                <li>
    Qty:{" "}
    <QuantityInput
  type="number"
  min={1}
  value={product.quantity || 1}
  onChange={(e) => {
    const updated = selectedProducts.map((p) =>
      p.product.id === product.product.id
        ? { ...p, quantity: parseInt(e.target.value) }
        : p
    );
    setSelectedProducts(updated);
  }}
/>

  </li>
                </ProductSpecs>
                <ProductAction>
                  <button onClick={() => handleDelete(product?.product?.id)}>
                    Delete
                  </button>
                  <Link to="/product">See more like this</Link>
                </ProductAction>
                <Divider />
              </ProductCard>
            ))}
          </ProductList>
        ) : (
          <EmptyCartWrapper>
            <img src={Nodatas} alt="Empty Cart" />
          </EmptyCartWrapper>
        )}
      </DesktopOnly>
    </div>
  );
}

export default ProductListSection;
