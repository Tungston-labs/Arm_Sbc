import { useState } from "react";
import { Pagination } from "antd";
import { PaginationStyles } from "./customPagination.style";

const CustomPagination = ({
  total,
  pageSize = 10,
  defaultPage = 1,
  onChange,
  align = "center",
}) => {
  const [page, setPage] = useState(defaultPage);

  const handleChange = (p) => {
    setPage(p);
    if (onChange) onChange(p);
  };

  return (
    <>
      <PaginationStyles />
      <Pagination
        total={total}
        pageSize={pageSize}
        current={page}
        onChange={handleChange}
        showSizeChanger={false}
        align={align}
      />
    </>
  );
};

export default CustomPagination;
