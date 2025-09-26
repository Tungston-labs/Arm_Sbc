import { useState } from 'react'
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
} from "../../pages/Inquiryform/InquiryPage.Styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Divider } from '../../pages/cartpage/CartPage.Styles';
import Nodata from "../../assets/inquriy/mobilenodata.svg";
import Nodatas from "../../assets/inquriy/nodata.svg";
import { products as productsData } from "../../pages/Inquiryform/productsData";
function ProductListSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [products] = useState(productsData);
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
            margin: "1rem 0"
          }}
        >
          <span>Items cart</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isOpen && (
          <>
            {products.length > 0 ? (
              <ProductList>
                {products.map((product) => (
                  <ProductCard key={product.id}>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductSpecs>
                      {product.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ProductSpecs>
                    <ProductAction>
                      <button>Delete</button>
                      <a href="#">See more like this</a>
                    </ProductAction>
                    <Divider />
                  </ProductCard>
                ))}
              </ProductList>
            ) : (
              <EmptyCartWrapper>
                   <img src={Nodata} 
                  alt="Empty Cart" />
              </EmptyCartWrapper>
            )}
          </>
        )}
      </MobileOnly>

      <DesktopOnly>
        <Heading>Product Inquiry</Heading>
        <Divider />
        {products.length > 0 ? (
          <ProductList>
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductSpecs>
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ProductSpecs>
                <ProductAction>
                  <button>Delete</button>
                  <a href="#">See more like this</a>
                </ProductAction>
                <Divider />
              </ProductCard>
            ))}
          </ProductList>
        ) : (
          <EmptyCartWrapper>
            <img src={Nodatas} 
                  alt="Empty Cart" />

          </EmptyCartWrapper>
        )}
      </DesktopOnly>
    </div>
  )
}

export default ProductListSection
