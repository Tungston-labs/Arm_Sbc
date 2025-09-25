import { ConfigProvider, Pagination } from "antd";
import { useState } from "react";

const CustomPagination = ({
  total,
  pageSize = 10,
  defaultPage = 1,
  onChange,
}) => {
  const [page, setPage] = useState(defaultPage);

  const handleChange = (p) => {
    setPage(p);
    if (onChange) onChange(p);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: "#8A38F5",          
            itemActiveColor: "#fff",          
            itemActiveBorderColor: "transparent",
            itemBg: "#fff",                 
            itemBorderColor: "transparent",  
            colorText: "#000",               
            colorTextDisabled: "#999",        
            colorIcon: "#999",                
          },
        },
      }}
    >
      <Pagination
        total={total}
        pageSize={pageSize}
        current={page}
        onChange={handleChange}
        showSizeChanger={false}
      />
    </ConfigProvider>
  );
};

export default CustomPagination;
