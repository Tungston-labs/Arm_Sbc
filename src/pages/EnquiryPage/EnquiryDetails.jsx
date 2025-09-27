import { useState } from "react";
import Layout from "../../Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
  EmptyState,
} from "./EnquiryDetails.Styles";
// import { customerData, productData } from "./EnquiryDetailsData";
import { FaArrowLeft } from "react-icons/fa6";
import { fetchInquiryDetail, changeInquiryStatus } from "../../redux/inquirySlice";
import NoEnquiry from "../../assets/inquriy/noenquiry.svg";

const EnquiryDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const { detail, loading, error } = useSelector((state) => state.inquiry);

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (token && id) {
      dispatch(fetchInquiryDetail({ id, token }));
    }
  }, [dispatch, id, token]);

  useEffect(() => {
    if (detail?.status) {
      setStatus(detail.status);
    }
  }, [detail]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    dispatch(changeInquiryStatus({ id, status: newStatus, token }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "#F97316";
      case "Open": return "#22C55E";
      case "Closed": return "#E53935";
      default: return "#1e1e24";
    }
  };

  if (loading) return <Layout><p>Loading...</p></Layout>;
  if (error) return <Layout><p style={{ color: "red" }}>{error}</p></Layout>;
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
          onChange={(e) => {
            setStatus(e.target.value);
            updateInquiryStatus(e.target.value);
          }}
          bgColor={getStatusColor(status)}
        >
          <option value="">Select a status</option>
          <option value="Pending">Pending</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </StatusSelect>
      </SubHeaderRow>

<Section>
  <SectionTitle>Enquiry Details</SectionTitle>
  {(!detail || (!detail.products || detail.products.length === 0)) ? (
     <EmptyState>
    <img src={NoEnquiry} alt="No enquiry data" />
  </EmptyState>
  ) : (
    <>
     
      <CustomerDetailsGrid>
        <DetailItem><strong>Name:</strong> {detail.name || "N/A"}</DetailItem>
        <DetailItem><strong>Phone:</strong> {detail.phone || "N/A"}</DetailItem>
        <DetailItem><strong>Company:</strong> {detail.company || "N/A"}</DetailItem>
        <DetailItem><strong>Delivery location:</strong> {detail.location || "N/A"}</DetailItem>
        <DetailItem><strong>Email:</strong> {detail.email || "N/A"}</DetailItem>
        <DetailItem><strong>Description:</strong> {detail.description || "N/A"}</DetailItem>
        <DetailItem><strong>Address:</strong> {detail.address || "N/A"}</DetailItem>
      </CustomerDetailsGrid>

  
      <Section>
        <SectionTitle>Product Inquiries</SectionTitle>
        <ProductGrid>
          {detail.products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductName>{product.name}</ProductName>
            </ProductCard>
          ))}
        </ProductGrid>
      </Section>
    </>
  )}
</Section>


    </Layout>
  );
};

export default EnquiryDetails;
