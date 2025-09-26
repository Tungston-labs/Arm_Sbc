import React from "react";
import Layout from "../../Layout/Layout";
import {
  PageTitle,
  SubTitle,
  Table,
  TableHead,
  TableRow,
  TableCell,
  StatusBadge,
  Pagination,
  PageButton,
  ViewIcon,
  ArrowButton,
} from "./Enquiry.Styles";
import { useNavigate } from "react-router-dom";
import enquiryData from "./EnquiryData"; 

const Enquiry = () => {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/enquiry-details/${id}`);
  };

  return (
    <Layout>
      <PageTitle>Enquiry</PageTitle>
      <SubTitle>
        Stay organized with your product booking enquiries. Follow up on
        pending, open, or closed requests instantly.
      </SubTitle>

      <Table>
        <thead>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email ID</TableHead>
            <TableHead>Phone number</TableHead>
            <TableHead>Delivery location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </thead>
        <tbody>
          {enquiryData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                <StatusBadge status={item.status}>{item.status}</StatusBadge>
              </TableCell>
              <TableCell>
                <ViewIcon onClick={() => handleViewClick(item.id)} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <ArrowButton disabled>{`<`}</ArrowButton>
        <PageButton active>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <ArrowButton>{`>`}</ArrowButton>
      </Pagination>
    </Layout>
  );
};

export default Enquiry;
