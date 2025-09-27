import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import NoEnquiry from "../../assets/inquriy/noenquiry.svg";

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
  EmptyState,   // 👈 import it here
} from "./Enquiry.Styles";

import { fetchInquiries } from "../../redux/inquirySlice";

const Enquiry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list: enquiries = [], loading, error } = useSelector(
    (state) => state.inquiry || {}
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchInquiries(token));
    }
  }, [dispatch, token]);

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

      {loading && <p>Loading enquiries...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && enquiries.length === 0 && (
        <EmptyState>
          <img src={NoEnquiry} alt="No enquiries" />
        </EmptyState>
      )}

      {enquiries.length > 0 && (
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
            {enquiries.map((item) => (
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
      )}

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
