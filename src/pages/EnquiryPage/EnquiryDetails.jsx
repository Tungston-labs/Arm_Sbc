import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
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
import { FaArrowLeft } from "react-icons/fa6";
import { fetchInquiryDetail, changeInquiryStatus } from "../../redux/inquirySlice";
import NoEnquiry from "../../assets/inquriy/noenquiry.svg";

const EnquiryDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("accessToken");

const { inquiryDetail: detail, loading, error } = useSelector((state) => state.inquiry);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (token && id) {
      dispatch(fetchInquiryDetail({ id, token }));
    }
  }, [dispatch, id, token]);

useEffect(() => {
  if (detail?.status) {
    setStatus(detail.status.toLowerCase()); 
  }
}, [detail]);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    dispatch(changeInquiryStatus({ id, status: newStatus, token }));
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending": return "#F97316";
      case "open": return "#22C55E";
      case "closed": return "#E53935";
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
          onChange={(e) => handleStatusChange(e.target.value)}
          bgColor={getStatusColor(status)}
        >
          <option value="">Select a status</option>
          <option value="pending">Pending</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </StatusSelect>
      </SubHeaderRow>

     <Section>
  <SectionTitle>Customer Details</SectionTitle>
  {detail && (
    <CustomerDetailsGrid>
      <DetailItem><strong>Name:</strong> {detail.first_name} {detail.last_name}</DetailItem>
      <DetailItem><strong>Phone:</strong> {detail.phone || "N/A"}</DetailItem>
      <DetailItem><strong>Company:</strong> {detail.company_name || "N/A"}</DetailItem>
      <DetailItem><strong>Delivery location:</strong> {detail.delivery_location || "N/A"}</DetailItem>
      <DetailItem><strong>Email:</strong> {detail.email || "N/A"}</DetailItem>
      <DetailItem><strong>Description:</strong> {detail.description || "N/A"}</DetailItem>
      <DetailItem><strong>Address:</strong> {detail.address || "N/A"}</DetailItem>
      {/* <DetailItem><strong>Country:</strong> {detail.country || "N/A"}</DetailItem>
      <DetailItem><strong>State:</strong> {detail.state || "N/A"}</DetailItem> */}
    </CustomerDetailsGrid>
  )}
  <Section>
    <SectionTitle>Product Inquiries</SectionTitle>
    {detail?.products?.length > 0 ? (
      <ProductGrid>
        {detail.products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <p><strong>RAM:</strong> {product.ram}</p>
            <p><strong>Storage:</strong> {product.storage}</p>
            <p><strong>Cores:</strong> {product.cores}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    ) : (
      <EmptyState>
        <img src={NoEnquiry} alt="No product enquiries" />
      </EmptyState>
    )}
  </Section>
</Section>

    </Layout>
  );
};

export default EnquiryDetails;
