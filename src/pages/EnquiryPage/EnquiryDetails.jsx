import { useState } from "react";
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
  SubHeaderRow,
} from "./EnquiryDetails.Styles";
import { useNavigate } from "react-router-dom";
import { customerData, productData } from "./EnquiryDetailsData";
import { FaArrowLeft } from "react-icons/fa6";

const EnquiryDetails = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#F97316";
      case "Open":
        return "#22C55E";
      case "Closed":
        return "#E53935";
      default:
        return "#1e1e24";
    }
  };

  return (
    <Layout>
      <HeaderRow>
        <BackButton onClick={() => navigate("/enquiry-page")}>
          <FaArrowLeft />
        </BackButton>
        <PageTitle>Enquiry</PageTitle>
      </HeaderRow>

      <SubHeaderRow>
        <SubTitle>
          Stay organized with your product booking enquiries. Follow up on
          pending, open, or closed requests instantly.
        </SubTitle>
        <StatusSelect
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          bgColor={getStatusColor(status)}
        >
          <option value="">Select a status</option>
          <option value="Pending">Pending</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </StatusSelect>
      </SubHeaderRow>

      <Section>
        <SectionTitle>Customer Details</SectionTitle>
        <CustomerDetailsGrid>
          <DetailItem>
            <strong>Name:</strong> {customerData.name}
          </DetailItem>
          <DetailItem>
            <strong>Phone number:</strong> {customerData.phone}
          </DetailItem>
          <DetailItem>
            <strong>Company:</strong> {customerData.company}
          </DetailItem>
          <DetailItem>
            <strong>Delivery location:</strong> {customerData.location}
          </DetailItem>
          <DetailItem>
            <strong>Email ID:</strong> {customerData.email}
          </DetailItem>
          <DetailItem>
            <strong>Description:</strong> {customerData.description}
          </DetailItem>
          <DetailItem>
            <strong>Address:</strong> {customerData.address}
          </DetailItem>
        </CustomerDetailsGrid>
      </Section>

      <Section>
        <SectionTitle>Product Inquiries</SectionTitle>
        <ProductGrid>
          {productData.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductName>{product.name}</ProductName>
            </ProductCard>
          ))}
        </ProductGrid>
      </Section>
    </Layout>
  );
};

export default EnquiryDetails;
