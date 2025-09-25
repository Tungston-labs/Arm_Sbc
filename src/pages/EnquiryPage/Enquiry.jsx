// src/pages/Enquiry/Enquiry.jsx
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

import enquiryData from "./EnquiryData"; // 👈 import the array here

const Enquiry = () => {
  return (
    <Layout>
      <PageTitle>Enquiry</PageTitle>
      <SubTitle>
        Glad to have you back. Check your dashboard for the latest product updates
        and manage your enquiries seamlessly.
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
          {enquiryData.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>
                <StatusBadge status={row.status}>{row.status}</StatusBadge>
              </TableCell>
              <TableCell>
                <ViewIcon />
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
