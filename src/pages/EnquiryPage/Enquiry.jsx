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
  EmptyState,
} from "./Enquiry.Styles";
import { fetchInquiries } from "../../redux/inquirySlice";

const Enquiry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list: enquiries, total_pages, current_page, loading, error } =
    useSelector((state) => state.inquiry);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      dispatch(fetchInquiries({ token, page: 1 }));
    }
  }, [dispatch, token]);

  const handleViewClick = (id) => {
    navigate(`/enquiry-details/${id}`);
  };

  const handlePageChange = (page) => {
    if (page !== current_page && token) {
      dispatch(fetchInquiries({ token, page }));
    }
  };

  return (
    <Layout>
      <PageTitle>Enquiry</PageTitle>
      <SubTitle>
        Stay organized with your product booking enquiries. Follow up on
        pending, open, or closed requests instantly.
      </SubTitle>

      {loading && <p>Loading enquiries...</p>}
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

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
               <TableCell title={`${item.first_name} ${item.last_name}`}>
  {item.first_name} {item.last_name}
</TableCell>
<TableCell title={item.email}>{item.email}</TableCell>
<TableCell title={item.phone}>{item.phone}</TableCell>
<TableCell title={item.delivery_location}>{item.delivery_location}</TableCell>

                <TableCell>
                  <StatusBadge status={item.status?.toLowerCase()}>
                    {item.status}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <ViewIcon onClick={() => handleViewClick(item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}

      {total_pages > 1 && (
        <Pagination>
          <ArrowButton
            disabled={current_page === 1}
            onClick={() => handlePageChange(current_page - 1)}
          >
            {"<"}
          </ArrowButton>

          {Array.from({ length: total_pages }, (_, i) => (
            <PageButton
              key={i + 1}
              active={current_page === i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}

          <ArrowButton
            disabled={current_page === total_pages}
            onClick={() => handlePageChange(current_page + 1)}
          >
            {">"}
          </ArrowButton>
        </Pagination>
      )}
    </Layout>
  );
};

export default Enquiry;
