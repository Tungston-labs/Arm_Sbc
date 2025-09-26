import React from "react";
import { AddProductNav } from "./Addproduct.styles";
import { AddNavItem } from "./Addproduct.styles";

const AddProductNavBar = ({ activeTab, setActiveTab }) => {
  const tabs = ["Description", "Additional Information"];

  return (
    <AddProductNav>
      <ul>
        {tabs.map((tab) => (
          <AddNavItem
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </AddNavItem>
        ))}
      </ul>
    </AddProductNav>
  );
};

export default AddProductNavBar;
