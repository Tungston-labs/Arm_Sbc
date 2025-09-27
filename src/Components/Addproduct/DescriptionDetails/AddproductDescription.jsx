import React from "react";
import AddProductDescriptionCard from "./AddProductDescriptionCard";
import descriptionData from "./DescriptionData.json";

const AddProductSection = () => {
  return (
    <div>
      {descriptionData.map((block, idx) => (
        <AddProductDescriptionCard data={block} key={idx} />
      ))}
    </div>
  );
};

export default AddProductSection;
