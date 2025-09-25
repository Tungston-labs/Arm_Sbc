
import React from "react";
import Layout from "../../Layout/Layout";
import {
  PageTitle,
  SubTitle,
  BackButton,
  StatusSelect,
  Section,
  SectionTitle,
  CustomerDetailsGrid,
  DetailItem,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  HeaderRow,
} from "./EnquiryDetails.Styles";
import { useNavigate } from "react-router-dom";
import dummyImage from "../../../public/images/cart/chip.png"; 

const EnquiryDetails = () => {
      const navigate = useNavigate();
  const customer = {
    name: "Ajay kumar",
    phone: "623894571",
    company: "Ajkdslfdkh",
    email: "ajaydummy@gmail.com",
    address: "Dummy dummy",
    location:
      "Lorem ipsum dolor sit amet consectetur. At scelerisque eros urna rhoncus erat...",
    description:
      "Lorem ipsum dolor sit amet consectetur. At scelerisque eros urna rhoncus erat...",
  };

  const products = [
    { id: 1, name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz", img: dummyImage },
    { id: 2, name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz", img: dummyImage },
    { id: 3, name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz", img: dummyImage },
    { id: 4, name: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz", img: dummyImage },
  ];

  return (
    <Layout>
      {/* <BackButton>{"< Enquiry"}</BackButton> */}
      <HeaderRow>
        <BackButton onClick={() => navigate("/enquiry")}>{`<`}</BackButton>
        <PageTitle>Enquiry</PageTitle>
      </HeaderRow>
      <SubTitle>
        Welcome back! Manage your products and handle customer enquiries with ease.
      </SubTitle>

      {/* Status Dropdown */}
      <StatusSelect>
        <option>Select a status</option>
        <option>Pending</option>
        <option>Open</option>
        <option>Closed</option>
      </StatusSelect>

      {/* Customer Details */}
      <Section>
        <SectionTitle>Customer Details</SectionTitle>
        <CustomerDetailsGrid>
          <DetailItem><strong>Name</strong> {customer.name}</DetailItem>
          <DetailItem><strong>Phone number</strong> {customer.phone}</DetailItem>
          <DetailItem><strong>Company</strong> {customer.company}</DetailItem>
          <DetailItem><strong>Delivery location</strong> {customer.location}</DetailItem>
          <DetailItem><strong>Email ID</strong> {customer.email}</DetailItem>
          <DetailItem><strong>Description</strong> {customer.description}</DetailItem>
          <DetailItem><strong>Address</strong> {customer.address}</DetailItem>
        </CustomerDetailsGrid>
      </Section>

      {/* Product Inquiries */}
      <Section>
        <SectionTitle>Product Inquiries</SectionTitle>
        <ProductGrid>
          {products.map((p) => (
            <ProductCard key={p.id}>
              <ProductImage src={p.img} alt={p.name} />
              <ProductName>{p.name}</ProductName>
            </ProductCard>
          ))}
        </ProductGrid>
      </Section>
    </Layout>
  );
};

export default EnquiryDetails;
